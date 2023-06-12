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
        Schema::create('photo', function (Blueprint $table) {
            $table->char('photo_id', 7)->primary();
            $table->string('photo_path', 350);
            $table->string('photo_category', 20)->nullable(false);
            $table->char('group_id', 7)->nullable(true);
            $table->char('event_id', 7)->nullable(true);
            $table->foreign('group_id')->references('group_id')->on('group');
            $table->foreign('event_id')->references('event_id')->on('event');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('photo');
    }
};
