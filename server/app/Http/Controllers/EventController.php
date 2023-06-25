<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class EventController extends Controller
{
    //
    public function index()
    {
        $events = Event::all();
        return response()->json($events, 200);
    }

    public function store(Request $request)
    {

        $validatedData = $request->validate([
            'event_name' => 'required',
            'desc' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'created_by' => 'required',
            'prefecture' => 'required',
            'address' => 'required',
            'type' => 'required',
            'date' => 'required',


        ]);
        $new_event = Event::create([
            'event_name' => $validatedData['event_name'],
            'desc' => $validatedData['desc'],
            'type' => $validatedData['type'],
            'created_by' => $validatedData['created_by'],
            'prefecture' => $validatedData['prefecture'],
            'address' => $validatedData['address'],
            'date' => $validatedData['date'],


        ]);
        $file = $request->file('image');

        $fileName = time() . '_' . $file->getClientOriginalName();

        $disk = 'local';

        // Save the file to the specified location
        $path = $file->storeAs('public/images/eventHeader', $fileName, $disk);

        // Create a symbolic link
        $publicPath = Storage::url($path);

        $new_event->header_path = $publicPath;
        $new_event->save();

        return response()->json($new_event, 201);
    }

    public function show(string $id)
    {
        $events = Event::find($id);
        return response()->json($events, 200);
    }

    public function update(Request $request, string $id)
    {
        $events = Event::find($id);
        $events->update($request->all());
        return response()->json($events);
    }

    public function destroy(string $id)
    {
        $events = Event::find($id);
        $events->delete();
        return response()->json(null, 204);
    }
}
