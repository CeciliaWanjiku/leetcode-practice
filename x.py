def get_sub(string_):
  substring_to_length_mapping = dict()
  for char in string_:
    subs = string_.split(char)
    for sub in subs:
      if sub and sub not in substring_to_length_mapping:
        x = char + sub
        substring_to_length_mapping[x] = len(x)

  print substring_to_length_mapping


s = 'abcdabddytre'
