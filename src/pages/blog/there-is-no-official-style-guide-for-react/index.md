---
title: "There is no official style guide for React"
date: "2019-01-08T04:00:00.284Z"
---
And we clearly miss it.
<!--more-->

## Style guides

Style guides associated with programming languages enhance code quality and code reuse.

When code follows a style guide it is easy to understand and to extend by anybody else who also follows the same style guide.

Usually a style guide incorporates industry best practices. It does without doubt, thus adopted by many, offering a true relief for its users.

React, unfortunately, has no official style guide provided by Facebook. This role is taken voluntarily by AirBnb, and it is questionable.

Just some bits:

- Use `.jsx` as file extension instead of `.js` &mdash; a suggestion with *doubt*, against the gut, at least for me personally.
- Pass params as list instead of array, which contradicts the [loose coupling](https://alistapart.com/article/coding-with-clarity#section3) general coding principle.

```javascript
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
```

As a conclusion I do not use any styleguide for now. I rather wait for the official styleguide to come out.

It's not that the AirBnb styleguide is wrong. The fact is that even React itself doesn't stick to it.

### Resources

- [The AirBnb style guide with a contradictory best practice suggestion](https://github.com/airbnb/javascript#destructuring)
- [Coding with clarity](https://alistapart.com/article/coding-with-clarity#section3)   
