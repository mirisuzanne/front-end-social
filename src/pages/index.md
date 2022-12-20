---
title: Front-End Social
sub: A federated community of people who make websites
permalink: '/index.html'
---

We are front-end web makers
who value humans over technology,
and embrace diversity on an open,
accessible, and progressively-enhanced web.

A few of us started [front-end.social](https://front-end.social)
as a place to land together in the 'fediverse'
as our old community space online was being demolished.
Hopefully this could be a safer place,
especially for those of us with marginalized identities.
That remains our primary goal.

- [Registration & Invitations](/registration/)
- [Code of Conduct & Server Rules](https://front-end.social/about)
- [Support Us](/support/)

{% if collections.post | length > 0 %}
## Recent Posts

<ul class="post-list">
  {% for post in collections.post %}
    <li>
      <strong>
        <a href="{{ post.url }}">{{ post.data.title }}</a>
      </strong>
      <time datetime="{{ post.date | date('iso') }}">
        {{ post.date | date('post') }}
      </time>
    </li>
  {% endfor %}
</ul>
{% endif %}
