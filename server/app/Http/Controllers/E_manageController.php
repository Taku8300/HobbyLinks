<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EManage;

class E_manageController extends Controller
{
    //
    public function addUserToEvent(Request $request)
    {
        $validatedData = $request->validate([
            'event_id' => 'required|exists:events,event_id',
            'user_id' => 'required|exists:users,user_id',
            'group_id' => 'required|exists:groups,group_id',
        ]);

        $emanage =  EManage::create($validatedData);
        return response()->json(['message' => 'User added to group successfully', 'emanage' => $emanage], 200);
    }

    public function removeUserFromEvent(Request $request)
    {
        $validatedData = $request->validate([
            'event_id' => 'required|exists:e_manages,event_id',
            'user_id' => 'required|exists:e_manages,user_id',
            'group_id' => 'required|exists:e_manages,group_id',
        ]);

        EManage::where($validatedData)->delete();
        return response()->json('User removed from group successfully', 200);
    }

    public function queryUserInEvent($eventId)
    {
        $users = EManage::where('event_id', $eventId)->get();

        return response()->json($users, 200);
    }
}
