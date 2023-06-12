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
            $table->char('event_id', 7)->primary();
            $table->string('event_name', 250)->nullable(false);
            $table->string('address', 100)->nullable(false);
            $table->foreign('user_id')->references('user_id')->on('user');
            // $table->char('created_by'); # 外部キー
            // $table->foreign('created_by')->references('char')->on('user'); # 外部キー制約をつける
            $table->string('type', 10)->nullable(false);
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
