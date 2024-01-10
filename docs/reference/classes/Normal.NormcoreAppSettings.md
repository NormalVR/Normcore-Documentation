---
title: NormcoreAppSettings
layout: Reference
category: API Reference
class_name: NormcoreAppSettings
class_summary: A ScriptableObject that represents all settings related to a single Normcore application.
class_remarks: Most projects will use a single NormcoreAppSettings asset, but multiple can be created if you need to use multiple app keys, or you have development, staging, and production Normcore Private servers.
class_members:
- name: Static Fields
  members:
  - name: DEFAULT_MATCHER_URL
    definition: public string DEFAULT_MATCHER_URL
    summary: The default matcher URL for Normcore servers.
    remarks: This is always the matcher URL you should use unless you're using Normcore Private.
- name: Static Methods
  members:
  - name: CreateInstance
    definition: NormcoreAppSettings CreateInstance(string normcoreAppKey, string matcherURL = wss://normcore-matcher.normcore.io:3000)
    summary: Create a new app settings instance.
- name: Properties
  members:
  - name: normcoreAppKey
    definition: string normcoreAppKey { get; }
    summary: The app key used to associate your application with the Normcore servers.
  - name: matcherURL
    definition: string matcherURL { get; }
    summary: The matcher URL used to connect to Normcore servers. If you're using Normcore Private Cloud or On-Premises, make sure this points to your Normcore Private matcher service.

---
# { frontMatter.class_name }

{ frontMatter.class_summary }

{
  frontMatter.class_members.map(group => [
    (<h2>{group.name}</h2>),
    group.members.map(member => {
      const components = [
        (<div class="prop-title">{ member.name }</div>),
        (<p class="prop-definition"><i>{ member.definition }</i></p>),
      ]

      if (member.summary) components.push((<p class="brief-description">{ member.summary }</p>))
      if (member.remarks) components.push((<p class="brief-description">{ member.remarks }</p>))
      if (member.returns) components.push((<p class="brief-description">{ member.returns }</p>))
      if (member.parameters) components.push(member.parameters.map(parameter => (<li><b>{ parameter.name }:</b> { parameter.description }</li>)))

      return components
    })
  ])
}
