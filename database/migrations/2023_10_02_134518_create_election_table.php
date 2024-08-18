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
        Schema::create('election', function (Blueprint $table) {
            $table->id();
            $table->string('firstName'); // Add a column for first name
            $table->string('lastName'); // Add a column for last name
            $table->string('email')->unique(); // Add a column for email with unique constraint
            $table->string('occupation'); // Add a column for occupation
            $table->text('biography'); // Add a column for biography
            $table->text('manifesto'); // Add a column for manifesto
            $table->text('position'); // Add a column for manifesto
            $table->text('image'); // Add a column for manifesto
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('election');
    }
};
