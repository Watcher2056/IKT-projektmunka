class User
{
    public int Id;

    public string Username;

    public string Password;

    public List<Folder> Folders;

    public List<Song> LikedSongs;

    public User(int id, string username, string password)
    {
        Id = id;
        Username = username;
        Password = password;

        Folders = new List<Folder>();
        LikedSongs = new List<Song>();
    }
}

class Folder
{
    public int Id;

    public string Name;

    public User User;

    public List<Song> Songs;

    public Folder(int id, string name, User user)
    {
        Id = id;
        Name = name;
        User = user;

        Songs = new List<Song>();
    }
}

class Song
{
    public int Id;

    public string Name;

    public int TimesListened;

    public Folder Folder;

    public Author Author;

    public List<User> LikedByUsers;

    public Song(int id, string name, int timeslistened)
    {
        Id = id;
        Name = name;
        TimesListened = timeslistened;

        LikedByUsers = new List<User>();
    }
}

class Author
{
    public int Id;

    public string FirstName;

    public string LastName;

    public List<Song> Songs;

    public List<Event> Events;

    public Author(int id, string firstname, string lastname)
    {
        Id = id;
        FirstName = firstname;
        LastName = lastname;

        Songs = new List<Song>();
        Events = new List<Event>();
    }
}

class Event
{
    public int Id;

    public string Location;

    public Author Author;

    public DateTime DateTime;

    public Event(int id, string location, Author author, DateTime datetime)
    {
        Id = id;
        Location = location;
        Author = author;
        DateTime = datetime;
    }
}