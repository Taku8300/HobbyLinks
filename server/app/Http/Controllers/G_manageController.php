<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GManage;

class G_manageController extends Controller
{
    //
    public function addUserToGroup(Request $request)
    {
        $validatedData = $request->validate([
            'group_id' => 'required|exists:groups,id',
            'user_id' => 'required|exists:users,id'
        ]);

        $gmanage =  GManage::create($validatedData);
        return response()->json(['message' => 'User added to group successfully', 'gmanage' => $gmanage], 200);
    }

    public function removeUserFromGroup(Request $request)
    {
        $validatedData = $request->validate([
            'group_id' => 'required|exists:groups,id',
            'user_id' => 'required|exists:users,id'
        ]);

        GManage::where($validatedData)->delete();
        return response()->json(['message' => 'User removed from group successfully'], 200);
    }

    public function queryUserInGroup($groupId)
    {
        $users = GManage::where('group_id', $groupId)->with('user')->get();

        return response()->json($users, 200);
    }
}
