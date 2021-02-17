<?php


class BookShelf
{
  public $currentNumberOfBooks;
  public $capacity;
  public $books;

  public function __constructor()
  {
    // Retrieve currentNumberOfBooks, capacity and books from database. 
    // set them equal to $currentNumberOfBooks, $capacity, $books;

  }

  public function store($item)
  {
    // Add item to database.
  }

  public function retrieve($item)
  {
    // Retrieve item from database.
  }
}


class Book
{
  public $title;
  public $author;
  public $pages = ["Book page 1", "Book page 2", "Book page 3"];

  public function returnText(int $page): string
  {
    return $this->pages[$page - 1];
  }
};

class Magazine
{
  public $name;
  public $pages = ["Magazine page 1", "Magazine page 2", "Magazine page 3"];

  public function returnText(int $page): string
  {
    return $this->pages[$page - 1];
  }
}

class Notebook
{
  public $owner;
  public $pages = ["Notebook page 1", "Notebook page 2", "Notebook page 3"];

  public function returnText(int $page): string
  {
    return $this->pages[$page - 1];
  }
}

$book = new Book;
$magazine = new Magazine;
$notebook = new Notebook;

var_dump($book->returnText(3));
var_dump($magazine->returnText(3));
var_dump($notebook->returnText(3));

// Given page, return text..


?>



<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <!-- <?php echo $f_name ?> -->
</body>

</html>