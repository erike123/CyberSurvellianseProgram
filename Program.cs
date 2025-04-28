namespace Web3Auditor
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllersWithViews();

            // Add CORS services
            builder.Services.AddCors(options =>
            {
                    options.AddPolicy("AllowAll",
                        builder =>
                        {
                            builder.AllowAnyOrigin()
                                .AllowAnyMethod()
                                .AllowAnyHeader();
                        });
            });

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

            // Use CORS with the specified policy
            app.UseCors("AllowAll");

            app.UseAuthorization();

            app.MapControllerRoute(
                name: "default",
                pattern: "{action=Index}/{id?}", // Default to "Index" action if none provided
                defaults: new { controller = "Home" }
            ); // Set default controller to "Home"

            app.Run();
        }
    }
}
