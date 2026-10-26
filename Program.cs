var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.UseStaticFiles();

var summaries = new[]
{
"Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
{
var forecast = Enumerable.Range(1, 5).Select(index =>
new WeatherForecast
(
DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
Random.Shared.Next(-20, 55),
summaries[Random.Shared.Next(summaries.Length)]
))
.ToArray();
return forecast;
})
.WithName("GetWeatherForecast");

app.MapGet("/gold", () => new { metal = "gold", price = 2650, currency = "USD" });

app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
