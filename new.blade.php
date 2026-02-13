Got it 🔥 You want a Laravel Blade form with full CRUD operations and also display the names from the database.
I’ll give you a clean, simple working example 👇 (Create, Read, Update, Delete).
✅ Step 1: Create Migration

php artisan make:model Person -m
Inside migration file:
public function up()
{
    Schema::create('people', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->timestamps();
    });
}
Run:
php artisan migrate

✅ Step 2: Model (Person.php)
class Person extends Model
{
    protected $fillable = ['name'];
}

✅ Step 3: Controller

php artisan make:controller PersonController
Inside PersonController.php:
use App\Models\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function index()
    {
        $people = Person::all();
        return view('people', compact('people'));
    }

    public function store(Request $request)
    {
        Person::create([
            'name' => $request->name
        ]);

        return redirect()->back();
    }

    public function update(Request $request, $id)
    {
        $person = Person::find($id);
        $person->update([
            'name' => $request->name
        ]);

        return redirect()->back();
    }

    public function destroy($id)
    {
        Person::find($id)->delete();
        return redirect()->back();
    }
}

✅ Step 4: Routes (web.php)
use App\Http\Controllers\PersonController;

Route::get('/people', [PersonController::class, 'index']);
Route::post('/people', [PersonController::class, 'store']);
Route::put('/people/{id}', [PersonController::class, 'update']);
Route::delete('/people/{id}', [PersonController::class, 'destroy']);


✅ Step 5: Blade File (resources/views/people.blade.php)
Now your requested format 👇
@extends('layouts/master')

@section("centerPart")

<h1>CRUD Form</h1>

{{-- Create Form --}}
<form action="/people" method="POST">
    @csrf
    <input type="text" name="name" placeholder="Enter Name" required>
    <button type="submit">Add</button>
</form>

<hr>

<h2>All Names</h2>

@foreach($people as $person)
    <div style="margin-bottom: 10px;">

        {{-- Show Name --}}
        <strong>{{ $person->name }}</strong>

        {{-- Update Form --}}
        <form action="/people/{{ $person->id }}" method="POST" style="display:inline;">
            @csrf
            @method('PUT')
            <input type="text" name="name" placeholder="Update Name">
            <button type="submit">Update</button>
        </form>

        {{-- Delete --}}
        <form action="/people/{{ $person->id }}" method="POST" style="display:inline;">
            @csrf
            @method('DELETE')
            <button type="submit">Delete</button>
        </form>

    </div>
@endforeach

@endsection
🎯 What This Does
✔ Create new name
✔ Show all names
✔ Update name
✔ Delete name
Full CRUD working 🔥
If you want:
✅ Bootstrap styling
✅ Edit in modal
✅ Ajax version (without refresh)
✅ Validation
✅ SweetAlert delete confirm
Tell me 👌 I’ll upgrade it next level
