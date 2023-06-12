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
            $table->char('USER_ID', 5)->primary();
            $table->string('USER_NAME', 128);
            $table->date('BIRTHDAY')->nullable();
            $table->string('GENDER', 3)->nullable();
            $table->string('EMAIL', 256)->unique();
            $table->string('PASSWORD', 64);
            $table->timestamps();
            $table->timestamp('deleted_at')->nullable();
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
