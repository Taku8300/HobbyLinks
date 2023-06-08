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
            $table->char('GROUP_ID', 7)->primary();
            $table->char('USER_ID', 5);
            $table->timestamp('ENT_DATE')->useCurrent();
            $table->foreign('GROUP_ID')->references('GROUP_ID')->on('group');
            $table->foreign('USER_ID')->references('USER_ID')->on('user');
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
