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
        Schema::create('group', function (Blueprint $table) {
            $table->char('GROUP_ID', 7)->primary();
            $table->string('GROUP_NAME', 128);
            $table->char('CREATED_BY', 5);
            $table->integer('PEOPLE_LIMIT');
            $table->integer('CATEGORY_ID');
            $table->foreign('CATEGORY_ID')->references('CATEGORY_ID')->on('category');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('group');
    }
};
