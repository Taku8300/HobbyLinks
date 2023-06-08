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
            $table->char('EVENT_ID', 7)->primary();
            $table->char('USER_ID', 5);
            $table->foreign('EVENT_ID')->references('EVENT_ID')->on('event');
            $table->foreign('USER_ID')->references('USER_ID')->on('user');
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
