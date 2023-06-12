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
        Schema::create('user', function (Blueprint $table) {
            $table->char('user_id', 5)->primary();
            $table->string('user_name', 128)->nullable(false);
            $table->date('birthday');
            $table->string('gender', 3);
            $table->string('email', 256)->nullable(false)->unique();
            $table->string('password', 64)->nullable(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user');
    }
};
