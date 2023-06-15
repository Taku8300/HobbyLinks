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
        Schema::create('groups', function (Blueprint $table) {
            $table->increments('group_id');
            $table->string('group_name', 128);
            // フォーリンキーいらないの？
            $table->char('created_byUser', 5); //userID
            $table->integer('people_limit')->nullable();
            $table->integer('category_id')->unsigned();
            // description=説明 の略
            $table->string('desc');
            $table->string('header_Url');
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('category_id')->references('category_id')->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('groups', function (Blueprint $table) {
            $table->dropForeign(['category_id']);
        });


        Schema::dropIfExists('groups');
    }
};
