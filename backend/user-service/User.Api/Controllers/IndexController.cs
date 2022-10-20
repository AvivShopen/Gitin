using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Text.Json;
using Auth.Common.Enums;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.IdentityModel.Tokens;
using User.Api.Commands;

namespace User.Api.Controllers
{
  [ApiController]
  [Route("/")]
  public class IndexController : ControllerBase
  {

    private readonly IConfigurationRoot _config;

    public IndexController(IConfigurationRoot config)
    {
      _config = config;
    }

    [HttpGet]
    public string Get()
    {
      return "Hello World!";
    }

    [HttpPost("/security/createToken")]
    public IResult CreateToken(UserLoginCommand user)
    {
      if (user.UserName == "joydip" && user.Password == "joydip123")
      {
        var config = this._config;
        var issuer = config["Jwt:Issuer"];
        var audience = config["Jwt:Audience"];
        var key = Encoding.ASCII.GetBytes
        (config["Jwt:Key"]);

        var tokenDescriptor = new SecurityTokenDescriptor
        {

          Subject = new ClaimsIdentity(new[]
          {
                new Claim("Id", Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                new Claim("Permissions", JsonSerializer.Serialize(new HashSet<Permissions> { Permissions.RemoveUser, Permissions.BanUser, Permissions.UpdateComment }), JsonClaimValueTypes.JsonArray),
                new Claim("Restrictions", JsonSerializer.Serialize(new HashSet<Restrictions> { Restrictions.PostCode }), JsonClaimValueTypes.JsonArray),
                new Claim(JwtRegisteredClaimNames.Jti,
                Guid.NewGuid().ToString())
             }),
          Expires = DateTime.UtcNow.AddMinutes(5),
          Issuer = issuer,
          Audience = audience,
          SigningCredentials = new SigningCredentials
            (new SymmetricSecurityKey(key),
            SecurityAlgorithms.HmacSha512Signature)
        };

        var tokenHandler = new JwtSecurityTokenHandler();
        var token = tokenHandler.CreateToken(tokenDescriptor);
        var jwtToken = tokenHandler.WriteToken(token);
        var stringToken = tokenHandler.WriteToken(token);
        return Results.Ok(stringToken);
      }
      return Results.Unauthorized();
    }
  }
}