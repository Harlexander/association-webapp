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
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('subtext')->nullable(); // Nullable text column
            $table->text('footerText')->nullable(); // Nullable text column
            $table->text('about_us')->nullable(); // Nullable text column
            $table->string('facebook')->nullable(); // Nullable string column
            $table->string('instagram')->nullable(); // Nullable string column
            $table->string('twitter')->nullable(); // Nullable string column
            $table->string('linkedin')->nullable(); // Nullable string column
            $table->string('mobile1')->nullable(); // Nullable string column
            $table->string('mobile2')->nullable(); // Nullable string column
            $table->string('email1')->nullable(); // Nullable string column
            $table->string('email2')->nullable(); // Nullable string column
            $table->string('home_image')->nullable(); // Nullable string 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('settings');
    }
};
