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
        Schema::create('photos', function (Blueprint $table) {
            $table->integer('photo_id', true);
            $table->string('photo_path', 350);
            $table->timestamps();
            // データを消すではなく消す日にちを付ける)関数を使うためのカラム
            $table->timestamp('deleted_at')->nullable();
            $table->integer('group_id')->unsigned();
            $table->integer('event_id')->unsigned();

            $table->foreign('group_id')->references('group_id')->on('groups');
            $table->foreign('event_id')->references('event_id')->on('events');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('g_manages', function (Blueprint $table) {
            $table->dropForeign(['group_id']);
            $table->dropForeign(['event_id']);
        });

        Schema::dropIfExists('photos');
    }
};
