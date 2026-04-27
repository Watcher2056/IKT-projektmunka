// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

Product pelda = new() { Name = "Teszt", Price = 100};

Category egyik = new() {Id = 1, Description = "egyik" };
Category masik = new() { Id = 2, Description = "masik" };

pelda.Category  = egyik;

egyik.Products.Add(pelda);

class Product
{
    public string Name { get; set; }

    public int Price { get; set; }

    public Category Category { get; set; }
}

class Category
{
    public int Id { get; set; }
    public string Description { get; set; }
    public List<Product> Products { get; set; }


}