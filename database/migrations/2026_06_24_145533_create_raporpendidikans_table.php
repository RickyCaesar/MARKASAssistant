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
        Schema::create('raporpendidikans', function (Blueprint $table) {
            $table->id();
            $table->string('sekolah');
            $table->string('npsn');
            $table->string('kabkota');
            $table->string('rapor');
            $table->text('rekomendasi');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('raporpendidikans');
    }
};
