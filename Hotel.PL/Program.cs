using Hotel.BL.Interface;
using Hotel.BL.Mapper;
using Hotel.BL.Repos;
using Hotel.DAL.database;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();


// Enhancement ConnectionString
var connectionString = builder.Configuration.GetConnectionString("ApplicationConnection");

builder.Services.AddDbContext<ApplicationContext>(options =>
options.UseSqlServer(connectionString));
// Auto Mapper
builder.Services.AddAutoMapper(x => x.AddProfile(new DomainProfile()));

// Add Scoped
builder.Services.AddScoped<IReception, ReceptionRep>();
builder.Services.AddScoped<ICustomer, CustomerRep>();
builder.Services.AddScoped<IRooms, RoomsRep>();
builder.Services.AddScoped<ICleaners, CleanersRep>();
builder.Services.AddScoped<IRevirsations, RevirsationRep>();




var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
