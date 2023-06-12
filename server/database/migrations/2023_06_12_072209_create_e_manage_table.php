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
        Schema::create('e_manage', function (Blueprint $table) {
            $table->char('event_id', 7);
            $table->char('user_id', 5);
            $table->primary(['event_id', 'user_id']);
            $table->foreign('event_id')->references('event_id')->on('event');
            $table->foreign('user_id')->references('user_id')->on('user');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('e_manage');
    }
};
