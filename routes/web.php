<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Dashboard;
use App\Http\Controllers\Election;
use App\Http\Controllers\Events;
use App\Http\Controllers\JobBoard;
use App\Http\Controllers\Members;
use App\Http\Controllers\News;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\Payment;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\Statistics;
use App\Models\Events as ModelsEvents;
use App\Models\Settings;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/', [PagesController::class, 'index']);
Route::get('/about', [PagesController::class, 'about']);
Route::get('/contact', [PagesController::class, 'contact']);
Route::get('/mission-vision', [PagesController::class, 'mission']);
Route::get('/gallery', [PagesController::class, 'gallery']);
Route::get('/gallery/{category}', [PagesController::class, 'galleryCat']);


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::middleware('auth:sanctum')->group(function(){
    Route::get('/dashboard', [Dashboard::class, 'dashboard'])->name("dashboard");
    Route::get('/dashboard/members', [Members::class, 'getMembers']);
    Route::get('/dashboard/dues', [Payment::class, 'getUserPayments']);
    Route::get('/dashboard/events', [Events::class, 'getEvents']);
    Route::get('/dashboard/news', [News::class, 'getNews']);
    Route::get('/dashboard/job-board', [JobBoard::class, 'getJobs']);
    Route::get('/dashboard/profile', [ProfileController::class, 'profile']);
    
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/news', [News::class, 'postNews'])->name("news.create");
    Route::delete('/news', [News::class, 'deleteNews']);

    Route::post('/event', [Events::class, 'createEvent'])->name("event.create");
    Route::get('/event/admin', [Events::class, 'getAdminEvents']);
    Route::post('/event/register', [Events::class, 'register']);
    Route::get('/event/register', [Events::class, 'getRegEvents']);

    Route::post('/job-board', [JobBoard::class, 'createJob'])->name("job.create");

    Route::get('/stats', [Statistics::class, 'getStatistics']);

    Route::get('/admin/stats', [Statistics::class, 'getAdminStatistics']);

    Route::post('/create-payment', [Payment::class, 'initiatePayment']);
    Route::get('/verify-payment', [Payment::class, 'verifyPayment']);

    Route::get('/due-status', [Payment::class, 'dueStatus']);

    Route::get('/transactions/admin', [Payment::class, 'getPayments']);

    Route::post('/create-ticket', [Payment::class, 'createPaymentTicket'])->name("ticket.create");
    Route::get('/active-payment', [Payment::class, 'activePayments']);

});

Route::middleware('auth')->group(function(){
    Route::get('/admin', [AdminController::class, 'admin']);
    Route::get('/admin/members', [Members::class, 'adminMembers']);
    Route::get('/admin/payments', [Payment::class, 'getAdminPayments']);
    Route::get('/admin/events', [Events::class, 'getAdminEvents']);
    Route::get('/admin/news', [News::class, 'getAdminNews']);
    Route::get('/admin/job-board', [JobBoard::class, 'getAdminJobs']);
    Route::get('/admin/settings', [SettingsController::class, 'settings']);
    Route::get('/admin/gallery', [SettingsController::class, 'gallery']);
    Route::get('/admin/gallery/{categoryId}', [SettingsController::class, 'galleryCategory']);
    Route::post('/admin/gallery', [SettingsController::class, 'addCategory'])->name("new.category");
    Route::post('/admin/gallery/new', [SettingsController::class, 'newImage'])->name("new.image");
    Route::delete('/admin/gallery/image', [SettingsController::class, 'removeImage'])->name("delete.image");
    Route::post('/settings', [SettingsController::class, 'updateSettings'])->name("settings.update");
});

Route::get('/event', [Events::class, 'getEvents']);

Route::post('/election', [Election::class, 'apply']);
Route::get('/election', [Election::class, 'getCandidates']);
Route::get('/election/{id}', [Election::class, 'getCandidate']);
Route::delete('/election/{id}', [Election::class, 'removeCandidate']);

require __DIR__.'/auth.php';
