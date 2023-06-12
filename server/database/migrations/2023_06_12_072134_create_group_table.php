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
            $table->char('group_id', 7)->primary();
            $table->string('group_name', 250)->nullable(false);
            $table->string('prefecture', 5)->nullable(false);
            $table->string('description', 500)->nullable(true);
            $table->integer('people_limit');
            $table->integer('category_id');
            // $table->foreign('user_id')->references('user_id')->on('user');
            $table->foreign('category_id')->references('category_id')->on('category');
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
