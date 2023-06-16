<?php

// ImageController.php (コントローラー)

namespace App\Http\Controllers;

use App\Models\Photo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class PhotoController extends Controller
{
    public function upload(Request $request)
    {
        // バリデーションルールを設定する
        $rules = [
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // 画像ファイルの制約を指定する
        ];

        // バリデーションを実行する
        $request->validate($rules);

        // アップロードされたファイルを取得する
        $file = $request->file('image');

        // ファイル名を生成する
        $fileName = time() . '_' . $file->getClientOriginalName();

        // ファイルをストレージに保存する
        $path = $file->storeAs('public/images', $fileName);

        // シンボリックリンクを作成する
        $publicPath = Storage::url($path);

        // データベースに画像情報を保存する
        $image = new Photo();
        $image->path = $publicPath;
        $image->save();

        return response()->json(['url' => $publicPath]);
    }
}
