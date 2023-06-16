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
        Schema::create('groups', function (Blueprint $table) {
            $table->increments('group_id');
            $table->string('group_name', 128);
            $table->integer('created_byUser')->unsigned(); //userID
            $table->integer('category_id')->unsigned();
            // description=説明 の略
            $table->integer('people_limit')->nullable();
            $table->string('header_url');
            $table->string('desc');
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('created_byUser')->references('user_id')->on('users');
            $table->foreign('category_id')->references('category_id')->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('groups', function (Blueprint $table) {
            $table->dropForeign(['created_byUser']);
            $table->dropForeign(['category_id']);
        });


        Schema::dropIfExists('groups');
    }
};
