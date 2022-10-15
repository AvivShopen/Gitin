namespace Auth.Common.Utils
{
  public static class UserUtilities
  {
    public static bool HasPermission(this User user, Permissions permission)
    {
      return user.Permissions.Contains(permission);
    }

    public static bool HasRestriction(this User user, Restrictions restriction)
    {
      return user.Restrictions.Contains(restriction);
    }
  }
}