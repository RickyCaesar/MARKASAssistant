<?php

namespace App\Http\Controllers;

use App\Models\raporpendidikan;
use Illuminate\Http\Request;

class RaporpendidikanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $raporpendidikans = raporpendidikan::all();
        return inertia('admin/RaporPendidikan', [
            'raporpendidikans' => $raporpendidikans,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(raporpendidikan $raporpendidikan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(raporpendidikan $raporpendidikan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, raporpendidikan $raporpendidikan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(raporpendidikan $raporpendidikan)
    {
        //
    }
}
