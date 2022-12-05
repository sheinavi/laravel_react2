<?php

namespace Database\Factories;

use App\Models\Task;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class TaskFactory extends Factory
{

    protected $model = Task::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => 1,
            'text' => $this->faker->realText(mt_rand(10, 15)),
            'day' => $this->faker->dateTimeBetween('+1 day', '+1 week'),
            'reminder' => rand(0,1)
        ];
    }
}
