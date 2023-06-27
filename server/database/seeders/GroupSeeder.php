<?php

namespace Database\Seeders;

use App\Models\Group;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::transaction(function () {

            Group::insert([
                [
                    'group_name' => 'eggnam',
                    'created_by' => 1,
                    'category_id' => 5,
                    'people_limit' => 500,
                    'header_path' => '',
                    'desc' => 'あなたの好きなプリは何？私は97%!新しく入ってきたmy parettもうるみ盛れで最高!みんなでプリを撮ってポーズとかを共有しよう。',
                ]
            ]);
            Group::insert([
                [
                    'group_name' => 'ワンピカード＊サークル',
                    'created_by' => 3,
                    'category_id' => 1,
                    'people_limit' => 20,
                    'header_path' => '',
                    'desc' => 'みんなでワンピカードをプレイしていろんなデッキと対決しよう！ちなみにぼくは赤緑ローのリーパラで華麗にシャンブルズ!みんなはどう戦う!?',
                ]
            ]);
            Group::insert([
                [
                    'group_name' => '邦ロック同好会',
                    'created_by' => 2,
                    'category_id' => 8,
                    'people_limit' => 850,
                    'header_path' => '',
                    'desc' => '邦ロックをみんなで聞いて楽しんじゃおー!マイナーなバンドから有名なバンドまで個々のファンと繋がろう。同担拒否？推しはみんなのもの!'
                ]
            ]);

            Group::insert([
                [
                    'group_name' => 'キャンプサークル',
                    'created_by' => 4,
                    'category_id' => 6,
                    'people_limit' => 110,
                    'header_path' => '',
                    'desc' => '初心者歓迎！キャンプの名所をみんなで教えあっていろんなとこでキャンプしよう。主のお気には琵琶湖でキャンプ!'
                ]
            ]);
            Group::insert([
                [
                    'group_name' => 'ガジェットマニア集まれ！',
                    'created_by' => 5,
                    'category_id' => 7,
                    'people_limit' => 30,
                    'header_path' => '',
                    'desc' => 'いろんなコンパクトガジェット,新作ガジェット共有しよー、新商品発表イベントにも参戦しようぜ!俺はAnker信者!'
                ]
            ]);
            Group::insert([
                [
                    'group_name' => 'ジブリだいちゅき',
                    'created_by' => 6,
                    'category_id' => 8,
                    'people_limit' => 100,
                    'header_path' => '',
                    'desc' => '私たちの家は、ジブリ村。にわかの人でも大歓迎'
                ]
            ]);
            Group::insert([
                [
                    'group_name' => 'オカルト同好会',
                    'created_by' => 7,
                    'category_id' => 8,
                    'people_limit' => 930,
                    'header_path' => '',
                    'desc' => 'この世の陰謀を世間に広めるのが我々の務め。何が真実で何が嘘なのか、信じるのはあなた次第です。'
                ]
            ]);
        });
    }
}
