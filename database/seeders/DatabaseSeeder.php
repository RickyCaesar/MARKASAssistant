<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Ricky C.A.T',
            'email' => 'J^saXH9QjWKFJPGjL^&L42FQf',
            'password' => bcrypt('oL!$pT9B@k2uQsjjfUb6gH2qm'),
        ]);
    }
}
