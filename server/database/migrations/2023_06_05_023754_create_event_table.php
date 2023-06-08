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
        Schema::create('event', function (Blueprint $table) {
            $table->char('EVENT_ID', 7)->primary();
            $table->string('EVENT_NAME', 250);
            $table->string('PREFECTURE', 5);
            $table->string('ADDRESS', 100);
            $table->char('CREATED_BY', 5);
            $table->string('TYPE');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('event');
    }
};
