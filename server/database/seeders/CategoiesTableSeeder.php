<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::transaction(function () {
            Category::insert([
                [
                    'category_id' => '1',
                    'category_name' => 'bike',
                    'created_at' => '2023/06/19',
                    'updated_at' => '2023/06/19',
                    'deleted_at' => '2023/06/19',
                ]
            ]);
        });
    }
}
