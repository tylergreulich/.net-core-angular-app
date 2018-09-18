using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
  public class UserForRegisterDto
  {

    const int MaximumPasswordLength = 100;
    const int MaximumUsernameLength = 25;

    [Required]
    [StringLength(MaximumUsernameLength, MinimumLength = 3, ErrorMessage = "Username must be at least 3 characters")]
    public string Username { get; set; }

    [Required]
    [StringLength(MaximumPasswordLength, MinimumLength = 4, ErrorMessage = "Password must be at least 4 characters")]
    public string Password { get; set; }
  }
}