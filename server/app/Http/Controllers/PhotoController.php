<?php

// ImageController.php (コントローラー)

namespace App\Http\Controllers;

use App\Models\Photo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PhotoController extends Controller
{
    public function store(Request $request)
    {
        // ファイルのバリデーションや保存先の設定など必要な処理を追加
        if ($request->hasFile('image')) {

            // アップロードされたファイルを取得
            $file = $request->file('image');

            // アップロードされたファイルの元の名前を取得
            $filename = $file->getClientOriginalName();

            // ファイルを指定の場所に保存
            $file->storeAs('public/images', $filename);

            // Imageモデルのインスタンスを作成
            $image = new Photo;

            // ファイル名を設定
            $image->filename = $filename;

            // データベースに保存
            $image->save();

            // 成功レスポンスを返す
            return response()->json(['message' => 'Image uploaded successfully.']);
        }

        // エラーレスポンスを返す
        return response()->json(['message' => 'No image found.'], 400);
    }

    public function show($id)
    {
        // 指定されたIDの画像情報を取得
        $image = Photo::findOrFail($id);

        // 画像情報をJSON形式で返す
        return response()->json($image);
    }

    // 他の必要なメソッド（一覧表示、削除など）も追加可能
}
