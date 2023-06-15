<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('events', function (Blueprint $table) {
            $table->increments('event_id');
            $table->string('event_name', 250);
            $table->string('prefecture', 5);
            $table->string('address', 100);
            $table->char('created_by', 5); //userID参照
            $table->string('type');
            $table->string('header_url');
            $table->string('desc');
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('created_byUser')->references('user_id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('groups', function (Blueprint $table) {
            $table->dropForeign(['created_byUser']);
        });


        Schema::dropIfExists('events');
    }
};
