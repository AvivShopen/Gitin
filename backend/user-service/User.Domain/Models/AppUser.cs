using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Auth.Common.Enums;
using Microsoft.AspNetCore.Identity;

namespace User.Domain.Models
{
  public class AppUser : IdentityUser
  {
    [Required]
    public string DisplayName { get; set; }
    public HashSet<Permissions> Permissions { get; set; }
    public HashSet<Restrictions> Restrictions { get; set; }
  }
}