<?php

$tasks = [
    ['goal' => 'Fare la spesa', 'status' => 'done'],
    ['goal' => 'Studiare per l\'esame', 'status' => 'todo'],
    ['goal' => 'Pulire la casa', 'status' => 'done'],
    ['goal' => 'Preparare la cena', 'status' => 'todo'],
    ['goal' => 'Fare esercizio fisico', 'status' => 'todo'],
];

$tasks_json = json_encode($tasks);

header('Content-Type: application/json');

echo $tasks_json;
