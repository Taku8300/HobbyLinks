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
        Schema::create('g_manage', function (Blueprint $table) {
            $table->foreign('group_id')->references('group_id')->on('group');
            $table->foreign('user_id')->references('user_id')->on('user');
            $table->timestamps('ent_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('g_manage');
    }
};
