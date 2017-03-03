using System.Collections.Generic;
using System.Linq;
using System;
using System.Text;

public class WordSpinner
{
  public static string SpinWords(string sentence)
  {
    string[] words = sentence.Split(' ');
    List<string> spunSentence = new List<string>();
    
    for (int i = 0; i < words.Length; i++) {
      if (words[i].Length >= 5) {
        words[i] = Reverse(words[i]);
      }
      spunSentence.Add(words[i]);
    }
    return string.Join(" ", spunSentence);
  }
  
  public static string Reverse(string word) {
    var builder = new StringBuilder();
    
    for (int i = word.Length - 1; i >= 0; i--) {
      builder.Append(word[i]);
    }
    
    return builder.ToString();
  }
}
