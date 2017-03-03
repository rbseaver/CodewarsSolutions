using System;
using System.Collections.Generic;
using System.Linq;

public class ArrayRotator
{
  public static object[] Rotate(object[] data, int rotations)
  {
    var rotated = data.ToList();
  
    rotations = rotations % data.Length;
  
    if (rotations >= 0)
    {
        PositiveRotate(data, rotations, rotated);
    }
    else
    {
        NegativeRotate(data, rotations, rotated);
    }
  
    return rotated.ToArray();
  }
  
  private static void NegativeRotate(object[] data, int rotations, List<object> rotated)
  {
      IEnumerable<object> groupToMove;
      groupToMove = data.Take(Math.Abs(rotations));
      rotated.AddRange(groupToMove);
      rotated.RemoveRange(0, Math.Abs(rotations));
  }

  private static void PositiveRotate(object[] data, int rotations, List<object> rotated)
  {
      IEnumerable<object> groupToMove;
      groupToMove = data.Skip(rotated.Count - rotations);
      rotated.InsertRange(0, groupToMove.ToArray());
      rotated.RemoveRange(rotated.Count - rotations, rotations);
  }
}
