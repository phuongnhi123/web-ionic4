

export const listIsues = {
    issues: [
      {
        id: 29321,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 308290,
          name: 'Bernhard Rohloff'
        },
        category: {
          id: 10,
          name: 'UI'
        },
        subject: 'Move the watchers list to issue section',
        description: 'The issues view is split in two sections, the actual issue and the sidebar.\r\nOn the issues section there is everything centered around the issues actual context. The sidebar is mostly used to switch between the issue queries and has no relation to the issue itself. Except for the watchers list, which is separated from every other context on this view. This looks very odd to new users and it makes it hard to scan over the issue quickly. You always miss the watchers list.\r\n\r\nI would like to propose to place it besides the rest of the issues information as this is the place I would look first for it.\r\nYou have all issue related information in one place. Additionally the watchers list is no longer hidden in the sidebar menu if you are using Redmine on mobile devices.\r\n\r\n!watchers_list_in_issue_section.png!\r\n\r\n\r\n\r\n\r\n',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-08-02T15:44:35Z',
        updated_on: '2018-08-04T22:42:11Z'
      },
      {
        id: 29312,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 359005,
          name: 'Oliver Gmelch'
        },
        category: {
          id: 13,
          name: 'Time tracking'
        },
        subject: 'Spent time report does not show all logged time entries with parent task in different projects',
        description: 'We are currently running into the issue that the spent time report from a parent task does not work properly when confronted with sub tasks from different projects.\r\n\r\nSo we are running a structure similar to this:\r\n* Projects\r\n** P1_Particular customer project\r\n* Global helpdesk\r\n\r\nHence, the ticket hierarchy would look like this:\r\n* @#1@: Parent task => Global helpdesk\r\n* @#2@: Development task => subtask of @#1@, located in project P1\r\n\r\nOn the parent task\'s detail page @#1@, all time entries tracked against any of the sub tasks are calculated correctly (including those sub tasks from other projects).\r\nHowever, when clicking on the calculated time, the spent time report shows up, including spent time entries for the current project only and hence displaying incorrect values (mostly zero).\r\n\r\nA temporary workaround for us is to visit the spent time report not directly from the project but from the global perspective which shows correct values. \r\n\r\nSo to conclude:\r\n* This URL here does not work: https://redmine_base_domain/projects/helpdesk/time_entries?issue_id=%7E1\r\n* This URL here shows correct values (mind that it does not contain the project reference): https://redmine_base_domain/time_entries?issue_id=%7E1\r\n\r\nGiven the fact that the calculation on the parent task\'s detail page works correctly, I would consider this a bug. \r\n\r\nCurrently running Redmine v3.4.5. In case you need more information to reproduce this behaviour, I will be glad to support.',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: '139'
          }
        ],
        created_on: '2018-08-01T14:45:18Z',
        updated_on: '2018-08-01T14:45:18Z'
      },
      {
        id: 29306,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 332,
          name: 'Go MAEDA'
        },
        category: {
          id: 10,
          name: 'UI'
        },
        subject: 'Show assignee\'s icon on tooltips for gantt and calendar',
        description: 'It will be easier to understand who is involved in the issue.\r\n\r\nCurrently, gantt shows assignees icons to the left side of the issue\'s subjects. But it is not so noticeable. I think the assignee is important information to manage projects, so it should improve efficiency when users work with gantt.\r\n\r\n!{width: 327px;}.idea@2x.png!\r\n\r\nThis feature request is inspired by Asana.\r\n\r\n!{width: 600px;}.asana@2x.png!\r\n\r\n',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-08-01T03:25:47Z',
        updated_on: '2018-08-01T03:26:38Z'
      },
      {
        id: 29300,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 3,
          name: 'Patch'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 123153,
          name: 'Pavel Rosický'
        },
        category: {
          id: 41,
          name: 'Issues workflow'
        },
        subject: 'New issue can\'t select read-only tracker',
        description: 'I have 2 trackers, default and read-only\r\n1/ go to New issue\r\n2/ select the read-only tracker (the field disappears and can\'t be changed anymore)\r\n3/ after sumbitting issue has the default tracker\r\n\r\ndesired behaviour:\r\nit should be possible to create a new issue with a read-only tracker. It can by done via api and later on the edit form.\r\n\r\nrelated: #19162',
        done_ratio: 0,
        created_on: '2018-07-30T19:05:20Z',
        updated_on: '2018-08-04T23:51:09Z'
      },
      {
        id: 29291,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 10,
          name: 'Needs feedback'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 223595,
          name: 'Enziin System'
        },
        assigned_to: {
          id: 223595,
          name: 'Enziin System'
        },
        category: {
          id: 31,
          name: 'Plugin Request'
        },
        subject: 'NoMethodError: undefined method `migrate\' for Redmine::Plugin::Migrator:Class',
        description: 'Run command:\r\n\r\n<pre>\r\ncd plugins\r\nbundle exec rake redmine:plugins:migrate RAILS_ENV=production\r\n</pre>\r\n\r\nI get the error:\r\n\r\n<pre>\r\nNoMethodError: undefined method `migrate\' for Redmine::Plugin::Migrator:Class\r\n/home/developer/websites/redmine/lib/redmine/plugin.rb:482:in `migrate_plugin\'\r\n/home/developer/websites/redmine/lib/redmine/plugin.rb:454:in `migrate\'\r\n/home/developer/websites/redmine/lib/redmine/plugin.rb:468:in `block in migrate\'\r\n/home/developer/websites/redmine/lib/redmine/plugin.rb:467:in `each\'\r\n/home/developer/websites/redmine/lib/redmine/plugin.rb:467:in `migrate\'\r\n/home/developer/websites/redmine/lib/tasks/redmine.rake:135:in `block (3 levels) in <top (required)>\'\r\n/usr/local/rvm/gems/ruby-2.5.1/gems/rake-12.3.1/exe/rake:27:in `<top (required)>\'\r\n/usr/local/rvm/gems/ruby-2.5.1/bin/ruby_executable_hooks:15:in `eval\'\r\n/usr/local/rvm/gems/ruby-2.5.1/bin/ruby_executable_hooks:15:in `<main>\'\r\nTasks: TOP => redmine:plugins:migrate\r\n(See full trace by running task with --trace)\r\n</pre>\r\n',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: ''
          }
        ],
        created_on: '2018-07-30T04:07:59Z',
        updated_on: '2018-07-31T06:20:09Z'
      },
      {
        id: 29289,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 3,
          name: 'Patch'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 308290,
          name: 'Bernhard Rohloff'
        },
        category: {
          id: 10,
          name: 'UI'
        },
        fixed_version: {
          id: 32,
          name: 'Candidate for next major release'
        },
        subject: 'Wrap subprojects in the overview section with an unordered list to improve customisation.',
        description: 'The proposed patches wrap the subprojects inside an unordered list but preserves the original view.\r\nThe intention behind this proposal is to give users and theme designers more freedom in styling the subprojects section in the project overview without the need of patching it.',
        done_ratio: 0,
        created_on: '2018-07-29T11:44:30Z',
        updated_on: '2018-08-04T06:39:04Z'
      },
      {
        id: 29286,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 107353,
          name: 'Marius BALTEANU'
        },
        assigned_to: {
          id: 107353,
          name: 'Marius BALTEANU'
        },
        category: {
          id: 13,
          name: 'Time tracking'
        },
        subject: 'Add default spent time activity per role',
        description: 'Currently, you can set a default spent time activity for all users, regardless their role.\r\n\r\nI find it more useful if we add a default activity for each role (and not for each user how is requested in #938) because an user can have different roles per projects. Maybe in one project I\'m a developer and I want to have the "Development" activity as default, and in another project I\'ve the "Manager" role and I want to have the "Project Management" activity as default.\r\n\r\nIf a role doesn\'t have a default activity, the global should be set as default if exists, otherwise blank.\r\n\r\nAny feedback is welcome.',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-07-26T23:04:55Z',
        updated_on: '2018-07-28T08:27:30Z'
      },
      {
        id: 29285,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 3,
          name: 'Patch'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 107353,
          name: 'Marius BALTEANU'
        },
        category: {
          id: 10,
          name: 'UI'
        },
        subject: 'Add "Assign to me" shortcut to issue edit form',
        description: 'I would like to add an "Assign to me"[1] link next to the "Assignee" field which can be used to set the current user as assignee. There are a lot of cases when I edit an issue and I want to assign the issue to me. Using this shortcut, we save one click without any side effect. \r\n\r\n!{width:70%; border: 1px solid grey;}assign_to_me.png!\r\n\r\nfn1. I\'m using this feature in GitLab and from there the idea. \r\n',
        done_ratio: 0,
        created_on: '2018-07-26T22:49:11Z',
        updated_on: '2018-08-03T15:49:03Z'
      },
      {
        id: 29276,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 10,
          name: 'Needs feedback'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 328601,
          name: 'Christian Wolf'
        },
        assigned_to: {
          id: 328601,
          name: 'Christian Wolf'
        },
        subject: 'Autocomplete does not show anything',
        description: 'I have the problem, that the autocomplete feature is not working when selecting other issues. This happens e.g. when I want to add an association to another issue or put something into the parent issue field.\r\n\r\n*Expected/old behavior:*\r\nI know that recently I could simply type 2-3 letters of the topic name and using a background call to the server all issues with this string were searched. I could click one and I get the corresponding issue number inserted automatically.\r\n\r\n*Actual behavior:*\r\nFor a short time a waiting GIF (turning circle) is shown, when sufficiently many letters are typed in. Instead of a box with the possible values nothing is shown. So all I can do is to put the number of the issue to be referenced manually.\r\n\r\nWhen looking deeper into the problem I find that the browser starts a connection to the server using ajax and gets a JSON object with the correct result of the search. It seems that this result is simply not made visible.\r\n\r\nUnfortunately I am not familiar enough with the JS code of redmine to track this down completely. It might as well be a CSS issue that the "box" is simply hidden/overdrawn.\r\n\r\nIf needed I can give access to the server with an account to see the effect in a sandbox. Otherwise I am trying my best to help you find the issue.\r\n\r\n*Some formal informations:*\r\nI am using the git version *375c7adfe* from https://github.com/redmine/redmine.\r\n\r\n<pre>\r\nEnvironment:\r\n  Redmine version                3.4.6.stable\r\n  Ruby version                   2.5.1-p57 (2018-03-29) [x86_64-linux]\r\n  Rails version                  4.2.8\r\n  Environment                    production\r\n  Database adapter               Mysql2\r\nSCM:\r\n  Subversion                     1.10.0\r\n  Mercurial                      4.6.2\r\n  Bazaar                         2.7.0\r\n  Git                            2.18.0\r\n  Filesystem                     \r\nRedmine plugins:\r\n  periodictask                   3.2.1\r\n  redhopper                      1.0.10\r\n  redmine_auto_resubmission      1.0.2\r\n  redmine_custom_css             0.1.7\r\n  redmine_drawio                 0.8.2\r\n  redmine_private_wiki           0.2.0\r\n  redmine_shortcuts              0.0.2\r\n  redmine_wiki_lists             0.0.9\r\n  wiking                         1.1.0\r\n</pre>\r\n',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: '141'
          }
        ],
        created_on: '2018-07-25T14:29:38Z',
        updated_on: '2018-07-25T18:46:04Z'
      },
      {
        id: 29275,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 3,
          name: 'Patch'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 88801,
          name: 'Vincent Robert'
        },
        assigned_to: {
          id: 1,
          name: 'Jean-Philippe Lang'
        },
        category: {
          id: 12,
          name: 'Translations'
        },
        fixed_version: {
          id: 99,
          name: '4.0.0'
        },
        subject: 'Update French translations',
        description: 'Some translations were missing in the French locale file.',
        done_ratio: 0,
        created_on: '2018-07-25T09:09:08Z',
        updated_on: '2018-07-25T09:27:21Z'
      },
      {
        id: 29272,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 130529,
          name: 'César Lizurey'
        },
        category: {
          id: 32,
          name: 'REST API'
        },
        subject: 'Create several relations at the same time',
        description: 'Hi,\r\nFor the moment it\'s possible to get all the relations of an issue and to post only one new relation. Could it be possible to POST an array of relations to make only one call?\r\nThanks.',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-07-25T05:27:58Z',
        updated_on: '2018-07-25T05:27:58Z'
      },
      {
        id: 29268,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 130529,
          name: 'César Lizurey'
        },
        category: {
          id: 32,
          name: 'REST API'
        },
        subject: 'Can\'t include attachments or relations with Issues API',
        description: 'Hello,\r\nWhen I make an API call to get all the trackers of a certain tracker_id including the relations, it doesn\'t work.\r\nI use:\r\n<pre>\r\n/issues.json?tracker_id=XXX&include=relations\r\n</pre>\r\nI just have the content of the issues, as if I didn\'t put "&include=relations"\r\n\r\nHowever, it works when I call\r\n<pre>\r\n/issues/[number of issue].json?include=relations,attachments\r\n</pre>\r\n\r\nIt seems to have a problem fetching issues with includes and parameters.\r\n\r\nHere is the info:\r\n\r\n* database manager version: Mysql2\r\n* Ruby version: 2.4.1-p111 (2017-03-22) [x86_64-linux]\r\n* Rails version: 4.2.8\r\n* Redmine version: 3.4.2 stable\r\n\r\nThanks for the help.\r\nCésar',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: '132'
          }
        ],
        created_on: '2018-07-25T02:57:15Z',
        updated_on: '2018-07-25T08:27:34Z'
      },
      {
        id: 29263,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 3,
          name: 'Patch'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 107353,
          name: 'Marius BALTEANU'
        },
        category: {
          id: 10,
          name: 'UI'
        },
        subject: 'Move issue attributes to their own section in issue page',
        description: 'I would like to move the issue attributes to their own section in issue page from the following reasons:\r\n# to implement a collapse/expand feature (#29034)\r\n# to make the issue page more structured and more easily to read/scan\r\n# to allow in the future more improvements, like a sticky issue bar \r\n\r\nBefore:\r\n!{width:50%; border: 1px solid grey;}before.png!\r\n\r\nAfter:\r\n!{width:50%; border: 1px solid grey;}after.png!',
        done_ratio: 0,
        created_on: '2018-07-23T21:11:56Z',
        updated_on: '2018-07-23T21:20:07Z'
      },
      {
        id: 29259,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 3,
          name: 'Patch'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 355817,
          name: 'Stephan Wenzel'
        },
        category: {
          id: 19,
          name: 'Attachments'
        },
        fixed_version: {
          id: 127,
          name: '4.1.0'
        },
        subject: 'Attachments Controller squanders CodeRay\'s capabilities',
        description: 'Redmine *squanders* the capabilities of CodeRay for previewing code files in Redmine\'s preview pane. A very prominent squandering is the negligence of *javascript* files, for which Redmine only shows that no preview is available.\r\n\r\nAttachmentsController#show method only tests: @attachment.is_text? - The function Attachment::is_text? only relies on Redmine::MimeType.is_type?(\'text\', filename). The mime type of javascript, however, is "application/javascript". Here Redmine misses what CodeRay can do.\r\n\r\nI propose the following patches:\r\n\r\nAdd function \'is_code?\' to Attachment.rb\r\n\r\n<pre>\r\ndef is_code?\r\n  ::CodeRay::FileType[filename].present?\r\nend\r\n</pre>\r\n\r\nPatch AttachmentsController.rb (Redmine 3.4.6)\r\n\r\n<pre>\r\n- elsif @attachment.is_text? && @attachment.filesize <= Setting.file_max_size_displayed.to_i.kilobyte\r\n+ elsif (@attachment.is_text? || @atachments.is_code?) && @attachment.filesize <= Setting.file_max_size_displayed.to_i.kilobyte\r\n</pre>\r\n\r\nThese two patches add previews for cfc, cfm, clj, cpp, cu, cxx, c++, C, dpr, gemspec, go, groovy, gvy, haml, hpp, h++, html.erb, js, lua, mab, pas, phtml, prawn, py3, pyw, raydebug, rjs, rpdf, ru, rxml, sass, taskpaper, template, tmproj, xaml\r\n\r\nI have provided a plugin that applies these patches as a proof of concept:\r\n\r\n[[https://www.redmine.org/plugins/redmine_more_code]]\r\n\r\n',
        done_ratio: 0,
        created_on: '2018-07-22T18:16:04Z',
        updated_on: '2018-07-28T07:29:26Z'
      },
      {
        id: 29254,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 3,
          name: 'Patch'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 326516,
          name: 'Senya Senya'
        },
        category: {
          id: 9,
          name: 'Email notifications'
        },
        subject: 'Start date and due date in issue email notification',
        description: '',
        done_ratio: 0,
        created_on: '2018-07-20T19:23:55Z',
        updated_on: '2018-07-24T05:38:40Z'
      },
      {
        id: 29250,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 357734,
          name: 'Matthew Copper'
        },
        category: {
          id: 53,
          name: 'Performance'
        },
        subject: 'Problem with high RAM usage ',
        description: 'Hello,\r\n\r\nI have a problem with ram usage after trying to download attachment.\r\n\r\nMy machine has 1 GB of RAM and normal usage is less than 350MB, but when I click to download attachment for example 70MB there is 100% of ram usage and apache2 crashes. What is funny the attachment don\'t even start to download.\r\n\r\nIs there any solution for that except gave this machine more RAM. \r\n\r\nRegards \r\nMatthew',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: ''
          }
        ],
        created_on: '2018-07-19T09:11:10Z',
        updated_on: '2018-07-26T09:33:50Z'
      },
      {
        id: 29245,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 3,
          name: 'Patch'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 348741,
          name: 'Ivan Garcia'
        },
        category: {
          id: 37,
          name: 'I18n'
        },
        subject: 'Gender neutralized child/parent adjectives for some latin languages',
        description: 'From github I was kindly suggest to open the issue here too to be addressed properly, not only in github.\r\n\r\nhttps://github.com/redmine/redmine/pull/107#issuecomment-405448103\r\nPull request and files are in the above link.\r\nThanks for your work, redmine rocks!',
        done_ratio: 0,
        created_on: '2018-07-17T14:26:49Z',
        updated_on: '2018-07-25T20:12:13Z'
      },
      {
        id: 29227,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 21060,
          name: 'Ivan Cenov'
        },
        category: {
          id: 26,
          name: 'Text formatting'
        },
        subject: 'Code modifier @ disables generation of URL links',
        description: 'Here is, I think, a little bug in the generation of http links when using the code modifier @@@. Specifically, when an URL is surrounded by @@@ ... @@@, plain text is rendered instead of a link. However, if a text is added to the link, then the link is generated and the format is as in code block. Next example shows the cases.\r\n\r\n<pre>\r\nhttp://www.redmine.org -- regular format\r\n@http://www.redmine.org@ -- code format but plain text\r\n@"http://www.redmine.org":http://www.redmine.org@ -- code format and link\r\n</pre>\r\n\r\nhttp://www.redmine.org\r\n@http://www.redmine.org@\r\n@"http://www.redmine.org":http://www.redmine.org@',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: '141'
          }
        ],
        created_on: '2018-07-12T10:44:10Z',
        updated_on: '2018-07-12T10:44:10Z'
      },
      {
        id: 29225,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 356865,
          name: 'G. Matsumura'
        },
        category: {
          id: 56,
          name: 'Issues filter'
        },
        subject: 'Add role condition to << my projects >> filter',
        description: '"<< my projects >>" can filter issues which belongs to projects where I joined as a member.\r\n\r\nI would be very much appreciated if a role condition is added to this filter. \r\n\r\nLike this;\r\n\r\n---\r\n\r\n[ *V* ] *project [* _is_ *v] [* << _my projects_ >> *v]* +*as role [* << _any_ >> *v]*+\r\n\r\n---\r\n\r\nSelecting "<< _any_ >>" works just same as current "<< _my projects_ >>" filter.\r\nSelecting a role from the dropdown can filter issues by projects that I joined as the specific role.',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-07-12T08:08:31Z',
        updated_on: '2018-07-19T11:17:24Z'
      },
      {
        id: 29219,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 132986,
          name: 'Michael Schaefer'
        },
        category: {
          id: 29,
          name: 'Email receiving'
        },
        subject: 'Configure email truncation per tracker or project',
        description: 'It would be great if email truncation could be configured per project or tracker. This issue is somehow related to #26415 as the main concern is to truncate quoted emails in replies and signatures. However, for some projects/tracker it can be explicitly desirable to _not_ truncate those lines. A workflow for specific projects/trackers may explicitly imply forwarding emails or complete email threads to an issue. Right now I have to choose for the whole system to either truncate this information or to always drag the whole conversation along.\r\n\r\nKeep up the great work!',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-07-10T14:55:09Z',
        updated_on: '2018-07-10T14:55:09Z'
      },
      {
        id: 29218,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 356622,
          name: 'Claude MICHEL'
        },
        category: {
          id: 32,
          name: 'REST API'
        },
        subject: 'Cannot lock a Wiki page using REST API',
        description: 'I would like to lock a wiki page using REST API (PUT request), but nothing in thre REST API documentation about that.\r\nIs-it possible? What is the parameter name, and value to use?\r\n\r\nThx. ',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-07-10T14:14:37Z',
        updated_on: '2018-07-10T14:14:37Z'
      },
      {
        id: 29216,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 3,
          name: 'Patch'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 308290,
          name: 'Bernhard Rohloff'
        },
        category: {
          id: 10,
          name: 'UI'
        },
        subject: 'Replace the searchbox label in the header with a placeholder',
        description: 'This results in a cleaner UI and feels more "state of the art".\r\nThe label is just hidden so the accesskey (4) works as expected.\r\nI\'ve also added some horizontal padding similar to the jump-box.\r\n\r\n*Before:*\r\n!search_box_with_label.png!\r\n\r\n*After:*\r\n!search_box_with_placeholder.png!',
        done_ratio: 0,
        created_on: '2018-07-10T04:52:22Z',
        updated_on: '2018-07-30T01:58:37Z'
      },
      {
        id: 29214,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 11395,
          name: 'Fernando Hartmann'
        },
        category: {
          id: 10,
          name: 'UI'
        },
        subject: 'Button to copy PRE block content to clipboard',
        description: 'It would be very nice if we have a little button near @PRE@ block, so user can copy the entire content to clipboard.\r\nThis can be very useful when there are in the block informations that user wants to use other place.\r\n\r\nThis should work on issues and wikis.\r\n',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-07-09T16:58:32Z',
        updated_on: '2018-07-09T16:58:32Z'
      },
      {
        id: 29209,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 332,
          name: 'Go MAEDA'
        },
        category: {
          id: 14,
          name: 'Custom fields'
        },
        fixed_version: {
          id: 32,
          name: 'Candidate for next major release'
        },
        subject: 'Long text custom fields don\'t accept values longer than 64KB if backend database is MySQL',
        description: 'Redmine raises internal server error if a user enters text longer than 64KB to long text custom fields and the backend database is MySQL. \r\n\r\nIssue descriptions and journal notes can be larger than 64KB since Redmine 3.4.0 (#20127). Long text custom fields also should accept text exceeding 64KB.',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: ''
          }
        ],
        created_on: '2018-07-09T00:09:45Z',
        updated_on: '2018-07-09T00:17:51Z'
      },
      {
        id: 29208,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 332,
          name: 'Go MAEDA'
        },
        category: {
          id: 7,
          name: 'Accounts / authentication'
        },
        fixed_version: {
          id: 127,
          name: '4.1.0'
        },
        subject: 'IDN support for email addresses of user accounts',
        description: 'This is a patch to add IDN (internationalized domain names) support to email addresses of user accounts.\r\n\r\nCurrently, Redmine does not accept IDN email addresses like "joe@ドメイン名例.jp" and its ASCII expression "joe@xn--eckwd4c7cu47r2wf.jp" when creating/updating a user account. After applying this patch, both expressions will be accepted.\r\n\r\nAccording to IDN World Report, there are "approx 8.7 millions":https://idnworldreport.eu/year-2017/facts-and-figures/idn-growth/ IDNs in the world as of December 2016, and those "are used in many countries":https://idnworldreport.eu/maps/idn-world-map/. To support IDN email addresses should be beneficial for many people.\r\n\r\nThis patch converts Unicode domain names to traditional ASCII domain names just before saving an email address. However, it does not convert ASCII domain names to Unicode domain names when displaying email address. Users will see ASCII expression "joe@xn--eckwd4c7cu47r2wf.jp" on my_account page even if they have entered Unicode email address "joe@ドメイン名例.jp".\r\n\r\nThis approach can minimize the change to existing code and works fine with IDN-unaware MTAs and plugins while allowing people to use IDN email addresses.\r\n\r\n*"Email" field accepts Unicode domain names:*\r\n!{border: 1px solid #ccc;}.idn-support-screenshot-1.png!\r\n\r\n*ASCII converted email address is shown after saving:*\r\n!{border: 1px solid #ccc;}.idn-support-screenshot-2.png!\r\n\r\n\r\nReferences:\r\n\r\n* "IDN World Report – Official World Report on Internationalised Domain Names":https://idnworldreport.eu/\r\n* "Punycoder - the Punycode converter &#40;IDN converter&#41;":https://www.punycoder.com/\r\n',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-07-07T07:01:18Z',
        updated_on: '2018-07-09T13:15:01Z'
      },
      {
        id: 29203,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 356302,
          name: 'Vincent Germain'
        },
        category: {
          id: 10,
          name: 'UI'
        },
        subject: 'Add a button all/none to add watchers ',
        description: '\r\nIt would be nice to be able to add/remove all the watchers on an issue.\r\n',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-07-06T08:35:22Z',
        updated_on: '2018-07-26T09:31:03Z'
      },
      {
        id: 29195,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 356187,
          name: 'Juan Garcia'
        },
        category: {
          id: 14,
          name: 'Custom fields'
        },
        subject: 'Regular expression for Long text formatted custom fields does not work multiline',
        description: 'When using custom fields with format *Long text*, the *Regular expression* does not fully validate the field, as it seems to not be working multiline and global.\r\n\r\nUsing our case as example for this issue:\r\n\r\nWe want to validate a field named *Steps to reproduce*. We use the following regex:\r\n\r\n<pre>\r\n(([1-9]+[0-9]*\\. [A-Z]+.*?(\\n|$))+)\r\n</pre>\r\n\r\nAnd the following field *Default value* as a template:\r\n\r\n<pre>\r\n1. Start the application\r\n2. \r\n. Observe the issue\r\n</pre>\r\n\r\nThe template by itself without modification by the issue reporter should not validate. A valid example of a correct field would be:\r\n\r\n<pre>\r\n1. Start the application\r\n2. Go to "Help"\r\n3. Click "About"\r\n4. Observe the issue\r\n</pre>\r\n\r\nHowever, Redmine only validates the first line of the field. If the first line line does not pass the regex test, Redmine correctly complains "Steps To Reproduce is invalid". But it does ignores everything in the following lines.\r\n\r\nThere is no workaround that could work by rewriting the regular expression.\r\n\r\nPossible solutions:\r\n\r\n1. Make all *Long text* custom fields regex global and multiline by default\r\n2. Add additional checkboxes in custom field edit page with *Multiline* and *Global* to complement the *Regular expression* field\r\n\r\n*Environments:*\r\n\r\nWe can confirm this issue in both our current production environment as well as our test environment (the version of which will be migrating our production environment soon).\r\n\r\n<pre>\r\nProduction Environment:\r\n  Redmine version                3.2.1.stable\r\n  Ruby version                   2.3.4-p301 (2017-03-30) [x86_64-linux-gnu]\r\n  Rails version                  4.2.6\r\n  Environment                    production\r\n  Database adapter               Mysql2\r\n</pre>\r\n\r\n<pre>\r\nTest Enviroment:\r\nEnvironment:\r\n  Redmine version                3.4.2.stable\r\n  Ruby version                   2.3.4-p301 (2017-03-30) [x86_64-linux-gnu]\r\n  Rails version                  4.2.8\r\n  Environment                    production\r\n  Database adapter               Mysql2\r\n</pre>\r\n',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: '141'
          }
        ],
        created_on: '2018-07-05T04:31:14Z',
        updated_on: '2018-07-05T04:31:14Z'
      },
      {
        id: 29193,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 309730,
          name: 'gabriel Fareau'
        },
        category: {
          id: 24,
          name: 'Documentation'
        },
        subject: 'Finish Restoring Guide ',
        description: 'Please finish https://redmine.org/projects/redmine/wiki/RedmineBackupRestore\r\nThe restore part remain empty and I can be helpfull for people.',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: ''
          }
        ],
        created_on: '2018-07-04T16:18:40Z',
        updated_on: '2018-07-07T00:24:37Z'
      },
      {
        id: 29187,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 49905,
          name: 'Brice Beaumesnil'
        },
        category: {
          id: 26,
          name: 'Text formatting'
        },
        subject: 'Add image to a wiki page who\'s attached to another wiki page',
        description: 'The idea :\r\n\r\nUse this code @!attachment#8796!@ can display the image who have the id @#8796@ from all attachment\'s objects (this image can be attached from another wiki page).\r\n\r\nIt\'s can be useful to not upload the same image.',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-07-04T09:50:28Z',
        updated_on: '2018-07-17T09:24:39Z'
      },
      {
        id: 29185,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 3,
          name: 'Patch'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 259873,
          name: 'Mizuki ISHIKAWA'
        },
        category: {
          id: 10,
          name: 'UI'
        },
        subject: 'Add my_page to the application menu',
        description: 'This patch makes the following two changes\r\n* Add my page to application menu\r\n* Change to display application menu on my page screen\r\n\r\nThis patch makes it easier to move from My Page to issues and activities.\r\n!my_page.png!',
        done_ratio: 0,
        created_on: '2018-07-04T08:30:09Z',
        updated_on: '2018-07-05T16:03:57Z'
      },
      {
        id: 29184,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 3,
          name: 'Patch'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 259873,
          name: 'Mizuki ISHIKAWA'
        },
        category: {
          id: 10,
          name: 'UI'
        },
        fixed_version: {
          id: 32,
          name: 'Candidate for next major release'
        },
        subject: 'Add home to the application menu',
        description: 'This patch makes the following two changes\r\n・Add home to application menu\r\n・Change to display application menu on home screen\r\n\r\nBy applying this change you can check issues and activities as soon as you login.\r\n\r\n!home.png!',
        done_ratio: 0,
        created_on: '2018-07-04T08:16:46Z',
        updated_on: '2018-07-05T04:49:17Z'
      },
      {
        id: 29183,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 332,
          name: 'Go MAEDA'
        },
        category: {
          id: 10,
          name: 'UI'
        },
        fixed_version: {
          id: 127,
          name: '4.1.0'
        },
        subject: 'Swap positions of "Members" and "Latest news" on overview page',
        description: 'I think it would be better to show "Latest news" box above "Members" box.\r\n\r\nCurrently, "Latest news" box is displayed under the Members page. I think we can resolve the following problems by swapping positions.\r\n\r\n* "Members" box may become longer if the project has dozens of members. As a result, members cannot see Latest news" box without scrolling\r\n* The frequency of updates and importance of information is higher in "Latest news" box than in "Members box".\r\n\r\nTherefore, I suggest switching positions of those boxes.\r\n\r\n*Before:*\r\n!{width: 600px;}.news-box-position-before.png!\r\n\r\n*After:*\r\n!{width: 600px;}.news-box-position-after.png!',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-07-04T03:03:07Z',
        updated_on: '2018-07-15T00:07:41Z'
      },
      {
        id: 29172,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 354793,
          name: 'Nikita Remizov'
        },
        category: {
          id: 2,
          name: 'Issues'
        },
        subject: 'Markdown: External links broken',
        description: 'h2. Scenario\r\n\r\n* Open issue description / wiki / project description\r\n* Add link containing special chars, like ✓\r\n* Save\r\n\r\nh2. Result\r\n\r\n* Link 1: [link](http://www.redmine.org/projects/redmine/issues?utf8=✓&set_filter=1&f%5B%5D=status_id&op%5Bstatus_id%5D=o&f%5B%5D=fixed_version_id&op%5Bfixed_version_id%5D=%3D&v%5Bfixed_version_id%5D%5B%5D=1&f%5B%5D=&c%5B%5D=tracker&c%5B%5D=status&c%5B%5D=subject&c%5B%5D=updated_on&c%5B%5D=category&group_by=)\r\n* Link 2: [link](http://www.redmine.org/projects/redmine/issues?utf8=✓)\r\n\r\nh2. Ivestigation\r\n\r\nhttp://www.redmine.org/projects/redmine/wiki/Changelog_3_2\r\n\r\nProbably some how connected with commit https://github.com/redmine/redmine/commit/c246ffa184a5c773c05dfa568188575aa978f3ed#diff-d730a79b5c2ab74333592401cf7b2396\r\n\r\nBecouse /lib/redmine/wiki_formatting/markdown/formatter.rb removing line *return nil unless uri_with_safe_scheme?(link)* makes links work.\r\n',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: '118'
          }
        ],
        created_on: '2018-07-02T20:24:32Z',
        updated_on: '2018-07-03T15:38:13Z'
      },
      {
        id: 29171,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 3,
          name: 'Patch'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 123866,
          name: 'Stephane Evr'
        },
        category: {
          id: 53,
          name: 'Performance'
        },
        fixed_version: {
          id: 32,
          name: 'Candidate for next major release'
        },
        subject: 'Add missing index to custom_values',
        description: 'On our Redmine installation, we have around 100000+ issues with lots of custom fields.\r\nI ran into a bottleneck were some Issue Queries where very very slow when requesting criteria on multiple custom fields and grouping.\r\n\r\nIn the custom_values table, I noticed that there was no index for @[customized_type, customized_id, custom_field_id]@. Adding such index resulted in loading times much faster for those complex issue queries (From 60+ seconds down to 5 seconds, with DB caching disabled).\r\n\r\nHere is the index I added:\r\n\r\n<pre><code class="ruby">\r\nclass AddMissingIndexCustomValues < ActiveRecord::Migration\r\n  def change\r\n    add_index :custom_values, [:customized_type, :customized_id, :custom_field_id], name: "custom_values_customized_custom_field"\r\n  end\r\nend\r\n</code></pre>',
        done_ratio: 0,
        created_on: '2018-07-02T17:39:01Z',
        updated_on: '2018-07-04T12:42:50Z'
      },
      {
        id: 29164,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 151432,
          name: 'Yuuki NARA'
        },
        category: {
          id: 8,
          name: 'Administration'
        },
        subject: 'Make the terms overwrite from the Redmine administration screen.',
        description: 'The function of Redmine is flexible, and it can be used in various ways in a wide range.\r\nHowever, because the names of each term are fixed, it is not suitable for individual use, and it may be difficult to use Redmine.\r\n\r\nIf you add a mechanism to overwrite the definitions of terms on Redmine administration screen,\r\nI think Redmine can be used to a wider range.\r\n\r\nFor example,\r\nEach company\'s internal system, vertical market,\r\n\r\nCreate a yml file to overwrite the term definitions of each language and upload it from Redmine\'s administration screen.\r\n\r\n---\r\n\r\nAdvantages of this function\r\n\r\nChanging the term can be realized by editing the term file for each language, but has the following problem.\r\nThis function can solve the following problems.\r\n\r\nWhen changing Redmine\'s own term file, it is necessary to edit the definition file every time.\r\n\r\nIt is necessary to operate on the terminal instead of the web management screen.\r\nWhen using Redmine on SaaS, due to security policy restrictions of each organization, operation from termimal may not be possible.\r\n',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-07-01T10:57:33Z',
        updated_on: '2018-07-01T15:15:19Z'
      },
      {
        id: 29161,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 3,
          name: 'Patch'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 2784,
          name: 'Holger Just'
        },
        category: {
          id: 14,
          name: 'Custom fields'
        },
        fixed_version: {
          id: 33,
          name: 'Candidate for next minor release'
        },
        subject: 'Avoid SQL errors when adding a project custom field as a time report criteria',
        description: 'Custom fields can have different visibilities, depending on the custom field type and the current user:\r\n\r\n* Custom fields are always visible to admins\r\n* They are not visible for anonymous unless explicitly checked\r\n* They are visible if the visible flag is checked (or the user in in a checked group for issue custom fields)\r\n\r\nNow, to confirm whether a custom field is visible in a certain project, we use @CustomField#visibility_by_project_condition@. Given the following conditions:\r\n\r\n* We are a non-admin user\r\n* We defined a ProjectCustomField of type List which is not visible\r\n\r\nNow, when we show a time entry report and select the ProjectCustomField as an aggregation criteria, we get an error because of invalid SQL:\r\n\r\n<pre>\r\nActiveRecord::StatementInvalid: Mysql2::Error: Unknown column \'projects.project_id\' in \'IN/ALL/ANY subquery\':\r\nSELECT Sum(`time_entries`.`hours`) AS sum_hours, \r\n       Coalesce(cf_9.value, \'\')    AS coalesce_cf_9_value, \r\n       `time_entries`.`tyear`      AS time_entries_tyear, \r\n       `time_entries`.`tmonth`     AS time_entries_tmonth, \r\n       `time_entries`.`tweek`      AS time_entries_tweek, \r\n       `time_entries`.`spent_on`   AS time_entries_spent_on \r\nFROM   `time_entries` \r\n       INNER JOIN `projects` \r\n               ON `projects`.`id` = `time_entries`.`project_id` \r\n       LEFT OUTER JOIN `enumerations` \r\n                    ON `enumerations`.`id` = `time_entries`.`activity_id` \r\n                       AND `enumerations`.`type` IN ( \'TimeEntryActivity\' ) \r\n       LEFT OUTER JOIN `issues` \r\n                    ON `issues`.`id` = `time_entries`.`issue_id` \r\n       LEFT OUTER JOIN custom_values cf_9 \r\n                    ON cf_9.customized_type = \'Project\' \r\n                       AND cf_9.customized_id = projects.id \r\n                       AND cf_9.custom_field_id = 9 \r\n                       AND ( projects.project_id IN \r\n                             (SELECT DISTINCT m.project_id \r\n                              FROM   members m \r\n                                     INNER JOIN member_roles mr \r\n                                             ON mr.member_id = \r\n                                                m.id \r\n                             INNER JOIN custom_fields_roles cfr \r\n                                     ON cfr.role_id = mr.role_id \r\n                                                     WHERE  m.user_id = 3 \r\n                                                            AND \r\n                             cfr.custom_field_id = 9 \r\n                                                    ) ) \r\n                       AND cf_9.value <> \'\' \r\n                       AND cf_9.id = (SELECT Max(cf_9_2.id) \r\n                                      FROM   custom_values cf_9_2 \r\n                                      WHERE  cf_9_2.customized_type = \r\n                                             cf_9.customized_type \r\n                                             AND cf_9_2.customized_id = \r\n                                                 cf_9.customized_id \r\n                                             AND cf_9_2.custom_field_id = \r\n                                                 cf_9.custom_field_id) \r\nWHERE  (( ( projects.status <> 9 \r\n            AND projects.id IN ( 1, 2, 3, 5, \r\n                                 12, 14, 15, 19, 25 ) ) \r\n          AND ( projects.id IN ( 1, 2, 4, 5 ) ) )) \r\n       AND (( time_entries.spent_on IS NOT NULL )) \r\nGROUP  BY Coalesce(cf_9.value, \'\'), \r\n          `time_entries`.`tyear`, \r\n          `time_entries`.`tmonth`, \r\n          `time_entries`.`tweek`, \r\n          `time_entries`.`spent_on`\r\n</pre>\r\n\r\n The reason for that is the SQL generated by the @CustomField#visibility_by_project_condition@ method called for @Redmine::FieldFormat::Base#join_for_order_statement@ Here, we are using the final @else@ case and attempt to use the @project_id@ field on the @projects@ table.\r\n\r\nThe correct column here would however simply be @id@ instead of @project_id@. The attached patch fixes this behavior and avoids the SQL error. Unfortunately, I\'m not really sure how to properly test this. This whole area seems to be not well tested currently...',
        done_ratio: 0,
        created_on: '2018-06-29T15:14:58Z',
        updated_on: '2018-07-12T05:53:00Z'
      },
      {
        id: 29160,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 3,
          name: 'Patch'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 2784,
          name: 'Holger Just'
        },
        category: {
          id: 30,
          name: 'Code cleanup/refactoring'
        },
        fixed_version: {
          id: 99,
          name: '4.0.0'
        },
        subject: 'Remove unused and broken method CustomField.visibility_condition',
        description: 'The class method was introduced in r12012 along with the instance method @CustomField#visibility_by_project_condition@. The method\'s body seems to follow the idea of the instance method but misses a lot of data required by it, including the @user@ and the @project_key@. As such, the method would always throw an exception when called.\r\n\r\nSince the method is not tested, is never called by Redmine anywhere, and is unusable anyway, we can simply remove it as done by the attached patch.\r\n',
        done_ratio: 0,
        created_on: '2018-06-29T12:48:59Z',
        updated_on: '2018-06-30T06:07:50Z'
      },
      {
        id: 29158,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 355565,
          name: 'Konrad Kreitmair'
        },
        category: {
          id: 32,
          name: 'REST API'
        },
        subject: 'API don\'t shows value label of a costum field',
        description: 'h3. General informations\r\n\r\n*Ruby version:* 2.1.5-p273\r\n*Rails version:* 4.2.8 \r\n*Redmine version:* 3.4.4.stable.17183\r\n\r\nh3. Informations about the specification of the custom field\r\n\r\n*Format:* Key/value list\r\n*Multiple values:* True\r\n*Display:* checkboxes\r\n*Required:* no\r\n*Used as a filter:* no\r\n*Visible:* to any users\r\n*Trackers:* Patch\r\n*Projects:* a subproject\r\n\r\nh3. The Problem\r\n\r\nIn the response of an API call for an issue (<url>/1234.xml) with an custom field specified, i find a custom field element like this:\r\n<pre><code class="xml">\r\n<custom_field id="1" name="applied-to" multiple="true">\r\n  <value type="array">\r\n    <value>1</value>\r\n    <value>2</value>\r\n    <value>3</value>\r\n  </value>\r\n</custom_field>\r\n</code></pre>\r\n\r\nSo the problem is, that i get back the values of the custom field, but not the labels for this values.\r\n\r\nWhen i visit the webpage for this issue, the labels of the values are displayed, so it is no permission issue.',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: '134'
          }
        ],
        created_on: '2018-06-29T07:32:32Z',
        updated_on: '2018-07-01T00:16:02Z'
      },
      {
        id: 29151,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 3,
          name: 'Patch'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 332,
          name: 'Go MAEDA'
        },
        category: {
          id: 12,
          name: 'Translations'
        },
        fixed_version: {
          id: 127,
          name: '4.1.0'
        },
        subject: 'Add honorific suffixes ("san") in Japanese translation',
        description: 'I suggest adding an honorific suffix "さん" ("san") to Japanese messages.\r\n\r\nIn Japanese, it is rare and sometimes impolite not to add honorific suffixes referring to others in a conversation. For example, people say "Maeda-san" when talking to me. You can see more examples even on this site, such as #28125#note-18, #27009#note-5, and #25775#note-4. There are various honorific suffixes in Japanese. The most commonly used one is "さん" ("san"). Many localized software use "さん" in Japanese messages.\r\n\r\nThe attached patch adds "さん" after "%{author}".\r\n\r\n!{width: 329px; border: 1px solid #ccc;}.screenshot-29151@2x.png!',
        done_ratio: 0,
        created_on: '2018-06-28T03:37:53Z',
        updated_on: '2018-07-04T10:40:10Z'
      },
      {
        id: 29142,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 3,
          name: 'Patch'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 332,
          name: 'Go MAEDA'
        },
        category: {
          id: 12,
          name: 'Translations'
        },
        subject: 'Japanese translation improvement (password related strings)',
        description: 'The patch changes "再発行" (reissue) to "リセット" (reset), and introduces several small improvements. The word "再発行" vaguely suggests that a plain password will be informed.',
        done_ratio: 0,
        created_on: '2018-06-27T14:18:23Z',
        updated_on: '2018-06-27T14:18:23Z'
      },
      {
        id: 29128,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 10,
          name: 'Needs feedback'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 355438,
          name: 'Eser Esen'
        },
        assigned_to: {
          id: 355438,
          name: 'Eser Esen'
        },
        category: {
          id: 32,
          name: 'REST API'
        },
        subject: 'API: Issue Relation create does not work',
        description: 'using postman */issues/15658/relations.json*\r\n\r\nwith headers\r\n\r\n* Content-Type:application/json\r\n* X-Redmine-API-Key:...\r\n\r\nand payload\r\n\r\n<pre>\r\n{\r\n\t"relations": [\r\n\t\t{\r\n\t\t\t"issue_id":"15657",\r\n\t\t\t"relation_type":"follows",\r\n\t\t\t"delay": 0\r\n\t\t}\r\n\t]\r\n}\r\n</pre>\r\n\r\nalways returns 422 with error message\r\n\r\n<pre>\r\n{\r\n    "errors": [\r\n        "Related issue cannot be blank"\r\n    ]\r\n}\r\n</pre>\r\n\r\nwhat is wrong here, i tried mulitple structures. API documentation for issue relation is very unclear about that.',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: ''
          }
        ],
        created_on: '2018-06-26T09:00:38Z',
        updated_on: '2018-06-28T07:36:03Z'
      },
      {
        id: 29094,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 355093,
          name: 'Daniel Trstenjak'
        },
        category: {
          id: 9,
          name: 'Email notifications'
        },
        subject: 'Email reply looses indentation in pre-block',
        description: '\r\nHi,\r\n\r\nif I\'m replying by email to an email notification from a redmine ticket\r\nand using a pre-block - to keep the indentation - then the identation is\r\nlost in the redmine ticket.\r\n\r\nWhen viewing the ticket in the browser, then redmine seems to detect the\r\npre-block, because the text gets the corresponding border for a pre-block,\r\nbut the indentation from the email is missing.\r\n\r\nIf I\'m replying to a ticket in the browser, then the pre-block works as expected.\r\n\r\nI also sent the email with the pre-block to my system administator, to\r\nensure that my system isn\'t somehow removing the indentation, but my\r\nsystem administator gets the email in the sent form.\r\n\r\nAny ideas what could be the issue here or how I could debug it?\r\n\r\nGreetings,\r\nDaniel\r\n\r\n\r\nEnvironment:\r\n Redmine version                3.4.4.stable\r\n Ruby version                   2.1.5-p273 (2014-11-13) [x86_64-linux-gnu]\r\n Rails version                  4.2.8\r\n Environment                    production\r\n Database adapter               Mysql2\r\nSCM:\r\n Subversion                     1.8.10\r\n Darcs                          2.8.5\r\n Cvs                            1.12.13\r\n Bazaar                         2.7.0\r\n Filesystem\r\nRedmine plugins:\r\n mega_calendar                  1.7.0\r\n redmine_cc_addresses           0.4.0\r\n redmine_extended_watchers      1.0.5\r\n redmine_issue_templates        0.2.0\r\n',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: ''
          }
        ],
        created_on: '2018-06-21T09:55:00Z',
        updated_on: '2018-07-01T00:16:33Z'
      },
      {
        id: 29076,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 1329,
          name: 'Ewan Makepeace'
        },
        category: {
          id: 2,
          name: 'Issues'
        },
        subject: 'Dont return to Parent Task on Submit',
        description: 'If I create a SubTask on a Parent - the first time I save it I land not on my new task but back on the parent. Subsequently if I edit the subtask and save I remain on the subtask.\r\n\r\nThe initial behaviour is unexpected and unwelcome. Often half way through creating a task I realise I need to move it to a different project (which you can only do after saving) and hit edit, to reassign and end up accidentally reasigning the parent. Other times I realise I have made an error and end up editing the parent instead.\r\n\r\nI don\'t understand the rationale for this behaviour - I find it unexpected and annoying?',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: '119'
          }
        ],
        created_on: '2018-06-21T05:44:35Z',
        updated_on: '2018-07-04T23:41:27Z'
      },
      {
        id: 29069,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 10,
          name: 'Needs feedback'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 83059,
          name: 'Ty You'
        },
        category: {
          id: 13,
          name: 'Time tracking'
        },
        subject: 'API reports wrong date for time spent if issue start date is greater than spent_on date',
        description: 'If time is entered on a date prior to an issue\'s start date, the API reports the start date of the issue in the XML response, not the "spent_on" date entered into the time commit.\r\n\r\nEnvironment:\r\n  Redmine version                3.2.6.stable\r\n  Ruby version                   2.3.3-p222 (2016-11-21) [x86_64-linux]\r\n  Rails version                  4.2.7.1\r\n  Environment                    production\r\n  Database adapter               Mysql2\r\nSCM:\r\n  Subversion                     1.8.10\r\n  Mercurial                      3.1.2\r\n  Bazaar                         2.7.0\r\n  Git                            2.1.4\r\n  Filesystem                     \r\nRedmine plugins:\r\n  no plugin installed',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: '126'
          }
        ],
        created_on: '2018-06-19T14:41:46Z',
        updated_on: '2018-07-03T07:12:44Z'
      },
      {
        id: 29055,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 322536,
          name: 'Igor Antonov'
        },
        category: {
          id: 32,
          name: 'REST API'
        },
        subject: 'Searching for issue number with REST API redirects to issue HTML page',
        description: 'Search REST API queries matching issue number (with or without "#") are being redirected to HTML issue page if the issue exists.\r\nThe redirect is caused by quick jump to issue at source:/tags/3.3.0/app/controllers/search_controller.rb#L40.\r\n\r\nQuick jump is useful for search field in the UI but REST API response with redirect to an HTML page is... unexpected.\r\nI suggest leaving quick jump for HTML response and actually searching for issue number-like text for REST API.\r\n',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: '110'
          }
        ],
        created_on: '2018-06-19T12:00:31Z',
        updated_on: '2018-06-19T12:00:31Z'
      },
      {
        id: 29048,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 320023,
          name: 'filippo mandelli'
        },
        category: {
          id: 1,
          name: 'Wiki'
        },
        subject: 'Wiki page permission  level',
        description: 'I would like to set different permission level in a wiki page.\r\ni.e:\r\n\r\n| *Level* | *Description*|\r\n| 1 | developers |\r\n| 2 | service  |\r\n| 3 | marketing |\r\n| 4 | customer |\r\n\r\nAnd I would like to set permission in the Roles setting.\r\n\r\n',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-06-18T16:36:11Z',
        updated_on: '2018-06-22T15:19:38Z'
      },
      {
        id: 29045,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 3,
          name: 'Patch'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 332,
          name: 'Go MAEDA'
        },
        category: {
          id: 12,
          name: 'Translations'
        },
        subject: 'Change Japanese translation for Tracker',
        description: 'The current Japanese translation for the word "tracker" is "トラッカー". It is not a true translation but just an imitation of English pronunciation of "tracker". So, most Japanese people cannot understand the word "トラッカー" without someone\'s explanation.\r\n\r\nI suggest changing "トラッカー" to "チケット種別" (means "issue type"). It is very clear and people can easily understand the use of trackers.',
        done_ratio: 0,
        created_on: '2018-06-18T04:51:19Z',
        updated_on: '2018-06-30T04:52:35Z'
      },
      {
        id: 29043,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 70658,
          name: 'Roland Giesler'
        },
        category: {
          id: 11,
          name: 'Projects'
        },
        subject: 'Dropdown Project Search list is sorted in weird order',
        description: 'Since #19299 was implemented (I\'m assuming somewhat here), the sort order of projects in the dropdown list is sort-of-alfabetical.  If used to be in the same order as the project list, in other words, alfabetical, but with sub-project sorted under their parents. Now, in the dropdown list (right top corner), the list is sorted with parent projects first, then sub-project, and then sub-sub-projects, etc.\r\n\r\nThis does not make sense.  Why are sub-projects not sorted under their parents?  If we have parent projects like "Oranges", "Apples", "Pears" with sub-projects of Autumn, Spring and Summer under each, then there are 9 sub-projects listed "Autumn, Autumn, Autumn, Spring, Spring, Spring, Summer, Summer, Summer" for example.  I know it\'s possible to name sub-projects differently, but even with other naming, knowing which project a sub-projects belongs too it important and the list doens\'t show that, which makes it sort of pretty much worthless.',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: '126'
          }
        ],
        created_on: '2018-06-17T20:40:47Z',
        updated_on: '2018-06-18T03:25:07Z'
      },
      {
        id: 29041,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 123153,
          name: 'Pavel Rosický'
        },
        category: {
          id: 53,
          name: 'Performance'
        },
        subject: 'Update session token only once per minute',
        description: 'this is simmilar to #28952\r\n\r\nif Rails.application.config.redmine_verify_sessions is enabled, basically each read request triggers an update to tokens table. This is bad for performance because it blocks the database.\r\nMy patch transforms the update query into a select query that doesn\'t block on heavy load. We could actually update the token only once per hour which is the minimum available setting for Setting.session_lifetime and Setting.session_timeout, but redmine modifications could use smaller values, so I choose 1 minute interval. Smaller session_timeout then 1 minute won\'t work now, but I think such small timeout doesn\'t make much sense.',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-06-17T17:57:32Z',
        updated_on: '2018-06-18T09:06:44Z'
      },
      {
        id: 29034,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 107353,
          name: 'Marius BALTEANU'
        },
        category: {
          id: 10,
          name: 'UI'
        },
        subject: 'Option to collapse/expand issue sections',
        description: 'In #29027, I\'ve proposed to add an collapse/expand feature to issue sections.\r\n\r\nBelow there are 2 proposals:\r\n\r\n1. Collapse/expand only for the following sections: Description, Attachments (#29033), Subtasks and Relations.\r\n!{width:50%; border: 1px solid grey;}expand_collapse.png!\r\n\r\n2. Collapse/expand also for the Attributes section (this one requires more UI changes):\r\n!{width:50%; border: 1px solid grey;}with_attributes.png!\r\n',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-06-14T20:43:10Z',
        updated_on: '2018-07-28T05:50:20Z'
      },
      {
        id: 29033,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 3,
          name: 'Patch'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 107353,
          name: 'Marius BALTEANU'
        },
        category: {
          id: 10,
          name: 'UI'
        },
        fixed_version: {
          id: 127,
          name: '4.1.0'
        },
        subject: 'Move attachments to their own section in issue page',
        description: 'I would like to move attachments to their own section in issue page from 2 reasons:\r\n- to implement a collapse/expand feature\r\n- they are not always related to the issue description\r\n\r\nBefore:\r\n!{width:50%; border: 1px solid grey;}before.png!\r\n\r\nAfter:\r\n!{width:50%; border: 1px solid grey;}after.png!',
        done_ratio: 0,
        created_on: '2018-06-14T20:10:06Z',
        updated_on: '2018-06-30T23:45:18Z'
      },
      {
        id: 29027,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 308290,
          name: 'Bernhard Rohloff'
        },
        category: {
          id: 10,
          name: 'UI'
        },
        subject: 'Add more structure to the issues view by using tabs',
        description: 'I\'ve tested the patch series in #3058 on the latest trunk revision and it works as described and it\'s a great feature.\r\nHowever, I would like to propose to go a step further with the idea of tabbed views for the issues content.\r\nIn my opinion, it would be great to rework the whole issue page and convert it to a tabbed view. There is so much\r\ninformation on this single view that it\'s tends to overwhelm many less experienced and less tech savvy users e.g managers or clients.\r\nA more structured presentation could help such users a lot and would lead to more acceptance for Redmine in those user circles.\r\n\r\nThis also has the following advantages:\r\n\r\n* Faster switching between issue history and details\r\n* Less scrolling needed on small screens\r\n* Much cleaner and more intuitive UI/UX\r\n* Great entry point for plugin support (additional tabs) in future development\r\n\r\nI\'ve played a bit with the HTML and came up with a first mocked view.\r\nI would spent more design effort on a real implementation but I think the screenshots show my basic intention.\r\nAs you can see, no horizontal scrolling is needed to access the latest information on the issue.\r\nThe sections \'Subtasks\' and \'Related issues\' could move to their own tabs, too.\r\n\r\n!issues_details_tab.png!\r\n\r\n---\r\n\r\n!issue_time_tab.png!',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-06-13T16:22:36Z',
        updated_on: '2018-06-14T20:59:33Z'
      },
      {
        id: 29023,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 16505,
          name: 'Martín Tolava'
        },
        category: {
          id: 2,
          name: 'Issues'
        },
        subject: 'Can\'t see subtask created in a issue ',
        description: 'Hi. Im making a migration from Redmine 2.6 to Redmine 3.3 and Redmine 3.4 and I have this situation. In an existent issue I created a new subtask succesfully but I can\'t see the relation between them, neither the subtask, nor the parent issue. \r\nBut when I create a new Issue and a new subtask there is no problem.\r\n\r\n\r\n\r\nThis are my two environments where I test this.\r\n\r\n<pre>\r\nEnvironment:\r\n  Redmine version                3.3.8.stable.17383\r\n  Ruby version                   2.3.5-p376 (2017-09-14) [x86_64-linux]\r\n  Rails version                  4.2.7.1\r\n  Environment                    production\r\n  Database adapter               Mysql2\r\n  Database version               5.5.60\r\n\r\nSCM:\r\n  Subversion                     1.8.10\r\n  Git                            2.1.4\r\n  Filesystem                     \r\nRedmine plugins:\r\n  no plugin installed\r\n</pre>\r\n<pre>\r\nEnvironment:\r\n  Redmine version                3.4.6.stable.17383\r\n  Ruby version                   2.3.5-p376 (2017-09-14) [x86_64-linux]\r\n  Rails version                  4.2.8\r\n  Environment                    production\r\n  Database adapter               Mysql2\r\n  Database version               5.5.60\r\nSCM:\r\n  Subversion                     1.8.10\r\n  Git                            2.1.4\r\n  Filesystem                     \r\nRedmine plugins:\r\n  no plugin installed\r\n</pre>\r\n\r\n',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: '141'
          }
        ],
        created_on: '2018-06-13T02:06:24Z',
        updated_on: '2018-06-13T02:06:24Z'
      },
      {
        id: 28996,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 3,
          name: 'Patch'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 284508,
          name: 'Sho HASHIMOTO'
        },
        assigned_to: {
          id: 1,
          name: 'Jean-Philippe Lang'
        },
        category: {
          id: 24,
          name: 'Documentation'
        },
        fixed_version: {
          id: 99,
          name: '4.0.0'
        },
        subject: 'Update Redmine::Plugin document',
        description: 'I want to more information to Redmine methods for plugin development.\r\nAs a trial, I created a patch to add below information to Redmine::Plugin.\r\n\r\n* Add @since to each Redmine::Plugin methods\r\n* Add reference to Plugin_Tutorial wiki and Redmine::Plugin#requires_redmine\r\n* Add description to a few methods\r\n\r\nI checked @since info with using yard diff(the result pasted below).\r\n\r\n* https://gist.github.com/sho-h/15553f13b36e4acbd961086ced2f0a38\r\n\r\nI will create patches to add @since information to Redmine methods after this tickets was closed.\r\n',
        done_ratio: 0,
        created_on: '2018-06-08T15:05:04Z',
        updated_on: '2018-07-16T01:46:19Z'
      },
      {
        id: 28969,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 353592,
          name: 'Charles Atkinson'
        },
        category: {
          id: 16,
          name: 'Search engine'
        },
        subject: 'Search titles only: make configurable or remember last value',
        description: '*Orientation*\r\n\r\nRedmine 3.3.1.stable searches have a "Search titles only" check box.  It is always cleared when a new search is started.\r\n\r\n*Feature request*\r\n\r\nPlease consider making the default cleared/selected value a configurable item on the "My account" page.\r\n\r\nAlternatively please consider remembering the user\'s last cleared/selected value.\r\n',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-06-06T09:33:24Z',
        updated_on: '2018-06-06T09:33:24Z'
      },
      {
        id: 28967,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 163890,
          name: 'jiangshan song'
        },
        category: {
          id: 32,
          name: 'REST API'
        },
        subject: 'could the RESTAPI be used in the plugin with auth again?',
        description: 'I wrote a plugin.\r\nwhen I use $.ajax to access some rest api in the plugin, A login dialog is shown even if I have already logged in with redmine web.\r\ncould their a way for the RESTAPI to use the current user auth?',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: ''
          }
        ],
        created_on: '2018-06-06T05:20:10Z',
        updated_on: '2018-07-03T14:40:39Z'
      },
      {
        id: 28953,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 32805,
          name: 'André Bachmann'
        },
        category: {
          id: 2,
          name: 'Issues'
        },
        subject: 'Issue content gets lost if user deletes an attachment',
        description: 'Given is an already existing issue with one or more attachments. A user wants to edit this issue and add a comment, so he clicks "Edit". While editing and adding the issue\'s text, he notices an unwanted attachment in the issue head (in the yellow box on top of an issue) - so he clicks the small trash bin icon right to the attachment. The user gets asked if he is sure to delete this file, so he clicks "Yes". *Now all of his text changes are gone because Redmine reloads the issue page! And it doesn\'t even warn the user that all of his changes will get lost.*\r\n\r\nTo resolve this issue, I suggest a solution similar to when a user wants to close a browser tab while there is still an unsaved issue edit. Here the user gets asked if he really wants to close this tab.\r\n\r\nThe Redmine version is 3.4.5, and I also confirmed this with an older Redmine 2.6.2.',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: '139'
          }
        ],
        created_on: '2018-06-05T08:28:25Z',
        updated_on: '2018-07-11T09:12:23Z'
      },
      {
        id: 28950,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 5,
          name: 'High'
        },
        author: {
          id: 129465,
          name: 'James Chen'
        },
        category: {
          id: 9,
          name: 'Email notifications'
        },
        subject: 'Due date redmine ',
        description: 'Hi \r\n\r\n1.I had already install redmine 3.4.3 version\r\n\r\n2.I had already assign issue owner , if after due date , I need to e-mail alert next owner\r\n\r\nHow can I do ?',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-06-05T07:50:46Z',
        updated_on: '2018-06-05T07:50:46Z'
      },
      {
        id: 28947,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 259873,
          name: 'Mizuki ISHIKAWA'
        },
        category: {
          id: 1,
          name: 'Wiki'
        },
        subject: 'Show the existing attachments on the wiki editing page',
        description: 'When attaching a new file on the wiki edit page, the file name is displayed.\r\nHowever, existing attachments are not displayed.\r\n\r\nThis information is useful for displaying existing attachments as inline images (!file_name.png!).\r\n\r\nex)\r\n!{width: 30%}example.png!',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-06-05T02:01:54Z',
        updated_on: '2018-06-27T05:57:06Z'
      },
      {
        id: 28940,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 3,
          name: 'Patch'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 123153,
          name: 'Pavel Rosický'
        },
        category: {
          id: 53,
          name: 'Performance'
        },
        fixed_version: {
          id: 127,
          name: '4.1.0'
        },
        subject: 'reduce allocations',
        description: 'since Rails 5.1+ we can use match? on a regex class safely even on older rubies\r\nhttps://github.com/rails/rails/blob/5-1-stable/activesupport/lib/active_support/core_ext/regexp.rb\r\n\r\nbut the performance benefit is visible only on ruby 2.4+\r\nhttps://bugs.ruby-lang.org/issues/8110\r\n\r\n<pre>\r\nrequire \'benchmark/ips\'\r\nBenchmark.ips do |x|\r\n  x.report(\'match\') { /test\\d/.match \'test5\'.freeze }\r\n  x.report(\'match?\') { /test\\d/.match? \'test5\'.freeze }\r\n  x.compare!\r\nend\r\n\r\nComparison:\r\nmatch?:  4493322.3 i/s\r\nmatch:    926754.9 i/s - 4.85x  slower\r\n</pre>\r\n\r\n*rake test* is about 5% faster',
        done_ratio: 0,
        created_on: '2018-06-03T23:24:46Z',
        updated_on: '2018-06-17T16:23:09Z'
      },
      {
        id: 28934,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 3,
          name: 'Patch'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 123153,
          name: 'Pavel Rosický'
        },
        category: {
          id: 44,
          name: 'Rails support'
        },
        fixed_version: {
          id: 99,
          name: '4.0.0'
        },
        subject: '[Rails 5.2] support migration context',
        description: 'https://github.com/rails/rails/commit/a2827ec9811b5012e8e366011fd44c8eb53fc714#diff-8d3c44120f7b67ff79e2fbe6a40d0ad6L1005',
        done_ratio: 0,
        created_on: '2018-06-01T22:38:07Z',
        updated_on: '2018-07-07T03:36:35Z'
      },
      {
        id: 28925,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 9,
          name: 'Confirmed'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 16879,
          name: 'Andriy Lesyuk'
        },
        category: {
          id: 14,
          name: 'Custom fields'
        },
        fixed_version: {
          id: 143,
          name: '3.4.7'
        },
        subject: 'Custom field values for enumerations not saved',
        description: 'The Enumerations controller drops @custom_field_values@ from @params@, therefore they are never saved. This is done in the code:\r\n\r\n<pre><code class="ruby">\r\n  def enumeration_params\r\n    # can\'t require enumeration on #new action\r\n    params.permit(:enumeration => [:name, :active, :is_default, :position])[:enumeration]\r\n  end\r\n</code></pre>\r\n\r\nHere @:custom_field_values@ is missing.\r\n\r\nSteps to reproduce:\r\n\r\n# Add a custom field for activities (time tracking)\r\n# Edit any activity (time tracking) in Enumerations\r\n# Try to save a value for the previously created custom field (it won\'t be saved)',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: '139'
          }
        ],
        created_on: '2018-05-31T19:55:04Z',
        updated_on: '2018-06-19T00:49:31Z'
      },
      {
        id: 28916,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 352934,
          name: 'james liu'
        },
        category: {
          id: 34,
          name: 'Gantt'
        },
        subject: 'Can export the Gantt to a colorful, one color for each member?',
        description: 'Hi team,\r\n\r\nCan export the Gantt to a colorful, one color for each member?\r\n\r\nIf you want to talk me more detail, you can contact me by 163118@sina.com\r\n\r\nThanks,\r\nJames Liu\r\n',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-05-31T06:47:49Z',
        updated_on: '2018-05-31T06:48:20Z'
      },
      {
        id: 28895,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 3,
          name: 'Patch'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 40856,
          name: 'Jens Krämer'
        },
        category: {
          id: 54,
          name: 'Hook requests'
        },
        subject: 'view_projects_copy_only_items hook',
        description: 'In a plugin I had the need to add something to this list of items to be copied when a project is copied.',
        done_ratio: 0,
        created_on: '2018-05-28T02:29:03Z',
        updated_on: '2018-05-28T08:02:07Z'
      },
      {
        id: 28882,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 5,
          name: 'High'
        },
        author: {
          id: 308290,
          name: 'Bernhard Rohloff'
        },
        assigned_to: {
          id: 1,
          name: 'Jean-Philippe Lang'
        },
        category: {
          id: 25,
          name: 'Website (redmine.org)'
        },
        subject: 'GDPR compliance',
        description: 'Today the General Data Protection Regulation (GDPR) comes into effect.\r\nThe regulation could cause severe damage to a non compliant community project, even if it\'s a non profit one.\r\nAs Richard Rauch mentioned on the "forum":http://www.redmine.org/boards/1/topics/55222 redmine.org doesn\'t seem to comply to the new laws.\r\n\r\nI think GDPR compliance for redmine.org should get checked ASAP.\r\nPerhaps the guys at Planio have some useful advise for their project mother ship.\r\n\r\n',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: ''
          }
        ],
        created_on: '2018-05-25T12:15:09Z',
        updated_on: '2018-05-25T12:34:57Z'
      },
      {
        id: 28878,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 352482,
          name: 'Дмитрий Ванчук'
        },
        category: {
          id: 7,
          name: 'Accounts / authentication'
        },
        subject: 'Email does not support Russian-language domains.',
        description: 'Example: info@сайт.бел\r\nChecked in the registration form.',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: '139'
          }
        ],
        created_on: '2018-05-25T08:12:07Z',
        updated_on: '2018-07-08T02:31:11Z'
      },
      {
        id: 28874,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 80618,
          name: 'Olivier Houdas'
        },
        category: {
          id: 29,
          name: 'Email receiving'
        },
        subject: 'MailHandler does not log exceptions caught',
        description: 'Issue:\r\nIf a locally unhandled exception is raised when receiving a mail, the error is not logged.\r\n\r\nHow to repro:\r\n1. Add the line\r\n<pre>\r\nraise "An error occurred"\r\n</pre>\r\nas the first line of the receive method\r\n2. Run the rake task \r\n<pre>\r\nrake redmine:email:receive_imap RAILS_ENV="production" host=imap.gmail.com port=993 move_on_success=Success move_on_failure=Failure username=***** password=*****\r\n</pre>\r\non a mailbox which has at least one unread mail in the mailbox\r\n3. Check the redmine log\r\nResult:\r\nD, [2018-05-24T17:25:53.647960 #16786] DEBUG -- : Receiving message 21674\r\nD, [2018-05-24T17:25:53.648109 #16786] DEBUG -- : Message 21674 can not be processed\r\n\r\nExpected result:\r\nD, [2018-05-24T17:25:53.647960 #16786] DEBUG -- : Receiving message 21674\r\nE, [2018-05-24T17:25:53.648076 #16786] ERROR -- : MailHandler: an unexpected error occurred when receiving email: An error has occured\r\nD, [2018-05-24T17:25:53.648109 #16786] DEBUG -- : Message 21674 can not be processed\r\n\r\nSuggested fix: define logger as self.logger instead as just logger in the MailHandler class',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: '139'
          }
        ],
        created_on: '2018-05-24T15:32:35Z',
        updated_on: '2018-05-24T15:32:35Z'
      },
      {
        id: 28871,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 352384,
          name: 'kui liu'
        },
        subject: 'Adding the window AD activity directory to verify redmine permissions is failed',
        description: 'LDAP validation information is shown in the attached diagram below, and the window AD server test is successful; add users and validate the LDAP auth that just created. Failed to login with new user redmine; login user: domain \\users or users',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: ''
          }
        ],
        created_on: '2018-05-24T07:59:55Z',
        updated_on: '2018-05-27T02:18:27Z'
      },
      {
        id: 28868,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 332,
          name: 'Go MAEDA'
        },
        category: {
          id: 8,
          name: 'Administration'
        },
        subject: 'Add Close/Reopen button on admin#projects page',
        description: 'Currently, you can perform administrative operations to projects on admin#projects page, except for close and reopen. You have to go to projects#show page to close/reopen the project.\r\n\r\nI think close/reopen button should also be on admin#projects page because close/reopen and archive/unarchive are very similar operations.\r\n\r\n!{width: 774px;}.close-reopen-button-on-projects@2x.png!',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-05-24T00:30:45Z',
        updated_on: '2018-05-24T00:30:45Z'
      },
      {
        id: 28865,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 352292,
          name: 'flabb17 _'
        },
        category: {
          id: 14,
          name: 'Custom fields'
        },
        subject: 'Group items by project in version type custom fields',
        description: 'I\'m using version 3.4.4 (this version should include "revision 16194":http://www.redmine.org/projects/redmine/repository/revisions/16194)\r\nand sub project name is not visible on my custom "affected version" field, but visible on target version (dropdown menu)\r\n\r\nthe "letter" H or P in my exemple is added on the version name as workaround \r\nTarget version:\r\n!target.png!\r\nAffected version: \r\n!affected.png!\r\n',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: '134'
          }
        ],
        created_on: '2018-05-23T13:51:07Z',
        updated_on: '2018-07-07T01:19:04Z'
      },
      {
        id: 28864,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 3,
          name: 'Resolved'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 352295,
          name: 'Frank Hebold'
        },
        category: {
          id: 14,
          name: 'Custom fields'
        },
        subject: 'Internal Server Error on query with users',
        description: 'I have two queries. Both are using a custom field where users of redmine are linked to issues. (not as assignee, but associated)\r\nOn one I get this error in my logs:\r\n\r\ncustom field 61 is the one making trouble\r\n<pre>\r\nStarted GET "/projects/computer/issues?utf8=%E2%9C%93&set_filter=1&f%5B%5D=status_id&op%5Bstatus_id%5D=*&f%5B%5D=tracker_id&op%5Btracker_id%5D=%3D&v%5Btracker_id%5D%5B%5D=14&f%5B%5D=&c%5B%5D=subject&c%5B%5D=cf_58&c%5B%5D=status&c%5B%5D=cf_57&c%5B%5D=cf_59&c%5B%5D=cf_64&c%5B%5D=cf_63&c%5B%5D=cf_62&c%5B%5D=cf_53&c%5B%5D=cf_61&group_by=cf_46&t%5B%5D=" for 192.168.2.167 at 2018-05-23 15:03:53 +0200\r\nProcessing by IssuesController#index as HTML\r\n  Parameters: {"utf8"=>"✓", "set_filter"=>"1", "f"=>["status_id", "tracker_id", ""], "op"=>{"status_id"=>"*", "tracker_id"=>"="}, "v"=>{"tracker_id"=>["14"]}, "c"=>["subject", "cf_58", "status", "cf_57", "cf_59", "cf_64", "cf_63", "cf_62", "cf_53", "cf_61"], "group_by"=>"cf_46", "t"=>[""], "project_id"=>"computer"}\r\n  Current user: hebold (id=61)\r\n  Rendered queries/_filters.html.erb (12.9ms)\r\n  Rendered queries/_columns.html.erb (1.5ms)\r\n  Rendered issues/_list.html.erb (273.2ms)\r\n  Rendered issues/index.html.erb within layouts/base (292.2ms)\r\nCompleted 500 Internal Server Error in 442ms (ActiveRecord: 84.3ms)\r\n\r\nActionView::Template::Error (undefined local variable or method `item\' for #<#<Class:0x00563c5e6eae88>:0x007f128233ed70>):\r\n    28:   <% end %>\r\n    29:   <tr id="issue-<%= issue.id %>" class="hascontextmenu <%= cycle(\'odd\', \'even\') %> <%= issue.css_classes %> <%= level > 0 ? "idnt idnt-#{level}" : nil %>">\r\n    30:     <td class="checkbox hide-when-print"><%= check_box_tag("ids[]", issue.id, false, :id => nil) %></td>\r\n    31:     <% query.inline_columns.each do |column| %>\r\n    32:     <%= content_tag(\'td\', column_content(column, issue), :class => column.css_classes) %>\r\n    33:     <% end %>\r\n    34:   </tr>\r\n  app/helpers/queries_helper.rb:132:in `block in column_content\'\r\n  app/helpers/queries_helper.rb:132:in `collect\'\r\n  app/helpers/queries_helper.rb:132:in `column_content\'\r\n  app/views/issues/_list.html.erb:31:in `block (3 levels) in _app_views_issues__list_html_erb__2826051833959946854_47408662523580\'\r\n  app/views/issues/_list.html.erb:30:in `each\'\r\n  app/views/issues/_list.html.erb:30:in `block (2 levels) in _app_views_issues__list_html_erb__2826051833959946854_47408662523580\'\r\n  app/helpers/issues_helper.rb:56:in `block in grouped_issue_list\'\r\n  app/helpers/issues_helper.rb:30:in `block in issue_list\'\r\n  app/helpers/issues_helper.rb:26:in `each\'\r\n  app/helpers/issues_helper.rb:26:in `issue_list\'\r\n  app/helpers/issues_helper.rb:41:in `grouped_issue_list\'\r\n  app/views/issues/_list.html.erb:16:in `block in _app_views_issues__list_html_erb__2826051833959946854_47408662523580\'\r\n  app/views/issues/_list.html.erb:1:in `_app_views_issues__list_html_erb__2826051833959946854_47408662523580\'\r\n  app/views/issues/index.html.erb:74:in `_app_views_issues_index_html_erb__1941775417574223512_47408641264820\'\r\n  app/controllers/issues_controller.rb:76:in `block (2 levels) in index\'\r\n  app/controllers/issues_controller.rb:75:in `index\'\r\n  lib/redmine/sudo_mode.rb:63:in `sudo_mode\'\r\n</pre>',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: '122'
          }
        ],
        created_on: '2018-05-23T13:05:52Z',
        updated_on: '2018-05-28T13:00:50Z'
      },
      {
        id: 28861,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 3,
          name: 'Patch'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 259873,
          name: 'Mizuki ISHIKAWA'
        },
        category: {
          id: 10,
          name: 'UI'
        },
        fixed_version: {
          id: 32,
          name: 'Candidate for next major release'
        },
        subject: 'Add a date item to the context menu',
        description: 'The context menu is very convenient because you can change the information without making a screen transition.\r\nI would like to change the date information by context menu.\r\n\r\nBy applying this patch you can open a modal to change the date.\r\n\r\n|!screenshot1.png!|!screenshot2.png!|',
        done_ratio: 0,
        created_on: '2018-05-23T08:23:51Z',
        updated_on: '2018-07-30T05:06:07Z'
      },
      {
        id: 28832,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 3,
          name: 'Patch'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 352085,
          name: 'Sasha Shovkun'
        },
        category: {
          id: 29,
          name: 'Email receiving'
        },
        subject: 'Allow email to create and reply to forum messages',
        description: 'h2. Summary\r\n\r\nThis is a patch for #277 that provides the ability to send messages to forums via email.  This gives Redmine a mailing list like capability by utilizing the work done in #1110 (Allow email to create issue or add comment), which has been available since r1572.  By enabling this functionality users can create new and reply to existing forum messages that will be sent out via email to all those who are _watching_ that forum.  \r\n\r\nh2. Configuration\r\n\r\nThere are two areas of configuration for this feature.  One is how you get emails into Redmine and the other is an optional configuration to set a different _emission email address_ specifically for forum emails.  \r\n\r\nh3. Receiving Forum Message Emails for Redmine Processing\r\n\r\nIn order to receive emails into Redmine the documentation found [[RedmineReceivingEmails|here]] should be used.  This documentation covers specific settings for creating issues within Redmine.  The only issue attribute that applies to this patch is the project attribute.  If you set the project attribute.  I have done my functional testing using the IMAP setup.  The rake command looks something like this:\r\n\r\n<pre>\r\nrake redmine:email:receive_imap host=imap.domain.com port=XXX ssl=true username=username@domain.com password=password_here RAILS_ENV=_production_\r\n</pre>\r\n\r\nUsing the IMAP setup, you must schedule the rake command to run on a regular basis using cron or another job scheduling mechanism.\r\n\r\nh3. Forum Emission Email Address\r\n\r\nIf you want to use a different _reply-to_ email address for forum messages than you use for other emails sent from Redmine, then you\'ll need to do the following:\r\n\r\n# Login to your Redmine instance as an Administrator\r\n# Click the _Administration_ link at the top of the page\r\n# Click on the _Settings_ link\r\n# Click on the _Email Notifications_ tab\r\n# Enter the email address for forum emails in the _Forum emission email address_ field\r\n#* This email address should go to the email account receiving forum emails (configured above in the _Receiving Forum Message Emails for Redmine Processing_ section)\r\n# Click the _Save_ button\r\n\r\nh2. User Documentation\r\n\r\nThe following describes how to make use of the email to forum functionality.\r\n\r\nh3. How to Create a New Forum Message via Email\r\n\r\nIn order to create a new forum message, you simply address an email to the email address specified in either the Adminitration->Settings->Email Notifications _Forum emission email address_ field (if populated) or the _Emission email address_ (if the the _Forum emission email address_ field is not populated).  The subject of the email should be in the format of: \r\n\r\n[Project Name - Forum Name] Forum message subject goes here\r\n\r\nThe format of the email body is not important.  The script that processes the forum emails is setup to determine the project and forum names based on the email subject.\r\n\r\nh3. How to Reply to a Forum Message via Email\r\n\r\nThis is pretty simple. When you receive an email of a forum message you simply reply to the message and write your reply in the body of the email.  One important thing to note is that you *SHOULD NOT* change the subject line if you want the email to be recognized as a reply to an existing forum message.  The script that processes the forum emails is setup to determine the original forum message being replied to by the portion of the subject that follows the square brackets.\r\n\r\nh3. Receive Forum Message Emails in Your Email Inbox\r\n\r\nIn case it\'s not clear how you receive forum messages, I\'m adding that info here.  The best way to subscribe to receive emails for a particular forum is to:\r\n\r\n# Click on the _Forums_ tab in Redmine\r\n# Click on the name of the forum you want to subscribe to\r\n# Click on the _Watch_ link so that the star icon turns yellow\r\n\r\nYou can also subscribe to all forums (and all other Redmine email notifications) by clicking on the _My account_ link in the upper right hand of the page and then select _For any event on all my projects_ from the drop down menu under the _Email notifications_ section.',
        start_date: '2008-07-10',
        done_ratio: 0,
        created_on: '2018-05-21T20:38:48Z',
        updated_on: '2018-05-22T20:21:33Z'
      },
      {
        id: 28827,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 6,
          name: 'Urgent'
        },
        author: {
          id: 350279,
          name: 'Satenik Safaryan'
        },
        category: {
          id: 2,
          name: 'Issues'
        },
        subject: 'Appointment scheduling',
        description: 'Dear All,\r\n\r\n28/05/2018 is non-working day in Armenia. While opening the dates I have noted in admin panel as non-workign day. Our call center operator who is scheduling appointments have seen that date was blocked. Some minutes ago we have received a call from the applicant who has scheduled an appointment on the locked date. How can that happen that I am blocking the date and after some days people can schedule an appointment?\r\nCan you please check it from your end, if that is possible, when was the date unblocked?\r\n',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-05-21T11:11:54Z',
        updated_on: '2018-05-21T11:11:54Z'
      },
      {
        id: 28823,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 160651,
          name: 'Denis Sidorov'
        },
        category: {
          id: 26,
          name: 'Text formatting'
        },
        subject: 'Multi-format markup for text fields',
        description: 'Have you any plans to implement different markup for the text fields?\r\n\r\nLike in bitbucket wiki:\r\n\r\n!bitbucket_wiki_markup.png!',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-05-21T05:44:08Z',
        updated_on: '2018-05-21T06:21:32Z'
      },
      {
        id: 28819,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 332667,
          name: 'Lara R'
        },
        category: {
          id: 14,
          name: 'Custom fields'
        },
        subject: 'Issue visibility: issues where custom field=certain value',
        description: 'Is there a possibility that a user can set issue visibility based on the value of a custom field?',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-05-19T14:44:25Z',
        updated_on: '2018-05-19T14:44:25Z'
      },
      {
        id: 28807,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 144124,
          name: 'Stefan Kuhr'
        },
        subject: 'Cannot search in a case-insensitive manner',
        description: 'Hello everyone,\r\n\r\nwe have just upgraded from Redmine 2.5.1.stable to 3.2.1.stable (installed on a newly installed Ubuntu 16.04LTS). Now we cannot search anymore in a case insensitive way. E.g. we get a different result when searching for "abb" than for "ABB", so nothing fancy here such as Umlauts or non-ASCII characters that we are searching for, just plain 7-bit ASCII search terms yield different results when cased differently.\r\n\r\nWe use the following versions:\r\n\r\nRedmine version                3.2.1.stable\r\n  Ruby version                   2.3.1-p112 (2016-04-26) [x86_64-linux-gnu]\r\n  Rails version                  4.2.10\r\n  Environment                    production\r\n  Database adapter               Mysql2\r\n\r\n\r\nIs this a problem with ruby being version 2.3.1 (the installation guide only lists versions 1.9.3, 2.0.0, 2.1 and 2.2 as being supported for redmine 3.2)?\r\n\r\nWe just did a default install of the required packages as they come with Ubuntu 16.04LTS. What are we doing wrong?\r\n\r\n\r\nBest regards,\r\n\r\n-- \r\nStefan Kuhr\r\n\r\n\r\n',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: ''
          }
        ],
        created_on: '2018-05-17T12:56:23Z',
        updated_on: '2018-05-28T02:39:27Z'
      },
      {
        id: 28795,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 351584,
          name: 'Tyler Harms'
        },
        category: {
          id: 2,
          name: 'Issues'
        },
        subject: 'Feature Request: Track Updated Date on Journal Entries',
        description: 'An "updated" date should be stored on the journal table along side the published date. It would be very helpful to know when a note was last updated.',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: ''
          }
        ],
        created_on: '2018-05-16T21:18:28Z',
        updated_on: '2018-05-16T21:19:13Z'
      },
      {
        id: 28793,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 351555,
          name: 'Anton Shepelev'
        },
        category: {
          id: 26,
          name: 'Text formatting'
        },
        subject: 'Redmine replaces tabs with spaces in code blocks',
        description: 'Regardless of whether I use Markdown or Textile, Redmine always replaces tabs with spaces in code blocks, which makes the code read-only, i.e. one cannot copy and paste it into their program, so I have to attach source files to issues or send them in separate e-mails.\r\n\r\nThe underlying Markdown and Textile text is correct but is rendered into HTML wrong.\r\n\r\nCode blocks should present code as it is written: spaces should be spaces and tabs should be tabs.\r\n\r\nMy Redmine environment:\r\n<pre>\r\nEnvironment:\r\n  Redmine version                3.4.4.stable\r\n  Ruby version                   2.3.3-p222 (2016-11-21) [i386-mingw32]\r\n  Rails version                  4.2.8\r\n  Environment                    production\r\n  Database adapter               Mysql2\r\nSCM:\r\n  Subversion                     1.8.16\r\n  Filesystem                     \r\nRedmine plugins:\r\n  no plugin installed\r\n</pre>',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: '134'
          }
        ],
        created_on: '2018-05-16T16:57:42Z',
        updated_on: '2018-05-16T16:57:42Z'
      },
      {
        id: 28774,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 3,
          name: 'Resolved'
        },
        priority: {
          id: 5,
          name: 'High'
        },
        author: {
          id: 351421,
          name: 'De Dang'
        },
        category: {
          id: 2,
          name: 'Issues'
        },
        subject: 'Internal Error when Submit the Description with Vietnamese in Unicode fonts',
        description: 'Hi Team,\r\n\r\nI am evaluating redmine features and when i submit an issue with Vietnamese unicode fonts in Description text area of the issue. I got the error on browser:\r\n"\r\nInternal error\r\n"\r\nin Redmine Log, I got this error message: \r\n"\r\nrdmine Mysql2::Error: Incorrect string value\r\n"\r\n\r\nCould you please advise me how to resolve the problem on my test server.\r\n\r\nThanks,\r\nDe',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: '139'
          }
        ],
        created_on: '2018-05-15T06:48:56Z',
        updated_on: '2018-05-15T08:44:12Z'
      },
      {
        id: 28773,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 348396,
          name: 'Tyler Nguyen'
        },
        category: {
          id: 39,
          name: 'PDF export'
        },
        subject: 'PDF export does not display most Vietnamese characters.',
        description: 'When I export the pdf format, most Vietnamese characters are not displayed. I tested on Redmine 3.4.5.stable, this bug has not been fixed.\r\n\r\nI found the cause. It seems the problem comes from rbpdf.\r\nThe last rbpdf version without error is 1.18.7\r\n\r\nAll new versions of rbpdf has errors.\r\nYou can use the text below to test if you do not have a Vietnamese keyboard.\r\n\r\n<pre>\r\nTiếng Việt, còn gọi là tiếng Việt Nam hay Việt ngữ, là ngôn ngữ của người Việt (người Kinh) và là ngôn ngữ chính thức tại Việt Nam. Đây là tiếng mẹ đẻ của khoảng 85% dân cư Việt Nam. Tiếng Việt còn là ngôn ngữ thứ hai của các dân tộc thiểu số tại Việt Nam.\r\n</pre>\r\n\r\nI do not know if this bug can be fixed at Redmine?\r\nCan I use rbpdf 1.18.7 for Redmine new version?\r\n\r\nHope this bug can be fixed.\r\n\r\nThank you !',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: '139'
          }
        ],
        created_on: '2018-05-15T04:46:47Z',
        updated_on: '2018-05-19T14:32:46Z'
      },
      {
        id: 28771,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 3,
          name: 'Patch'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 107353,
          name: 'Marius BALTEANU'
        },
        category: {
          id: 10,
          name: 'UI'
        },
        subject: 'Allow adding multiple entities when performing multiple searches in modals',
        description: 'This ticket is related to #17071 and #17579.\r\n\r\nIn "Zitec":https://zitec.com, we are trying to find a clean UI/UX solution to allow users to add multiple entities when performing multiple searches in modals like Add Watchers, Add members, Add projects. The current issues are very well explained in the related tickets.\r\n\r\nWe came up with 3 proposals:\r\n\r\n1. *add_to_bottom.jpg* which display the selected entities (users for example) under the search results section:\r\n !{width: 50%; border: 1px solid #ccc;}.add_to_bottom.jpg!\r\n\r\n\r\n2. *add_to_right_with_checkbox.jpg* which display the selected entities to the right of the search results\r\n\r\n!{width: 50%; border: 1px solid #ccc;}.add_to_right_with_checkbox.jpg!\r\n\r\n3. *add_to_right_with_x.jpg* same as 2, but an "X" icon is used to remove the selected entities. \r\n\r\n!{width: 50%; border: 1px solid #ccc;}.add_to_right_with_x.jpg!\r\n\r\nPersonally, I like the 3rd solution. Any feedback is welcome.\r\n\r\n',
        done_ratio: 0,
        created_on: '2018-05-14T22:26:25Z',
        updated_on: '2018-05-22T04:28:22Z'
      },
      {
        id: 28770,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 351354,
          name: 'Maiken Saveljev'
        },
        subject: 'Rest API with Curl API Key?',
        description: 'Hello!\r\n\r\nI had this project i\'v been working on.\r\nI found that the best way for me to use REST API is with cURL.\r\nBut then i came into the problem that with the cURL, Admin account and passwords are shown in the command.\r\n\r\n[[http://www.redmine.org/projects/redmine/wiki/Rest_api_with_curl]]\r\ncurl -v -H "Content-Type: application/xml" -X PUT --data-binary "@wiki.xml" -u login:password http://redmine/projects/foo/wiki/page_test.xml\r\n\r\nIs there a way to do this but with API Key?\r\nI am updating a Wiki page but on my own redmine server.\r\n\r\nOr do you guys have any other ways that i could do the same that curl does but with API Key?\r\n\r\n(I have bunch of data that will be updated to a Wiki page weekly) Basically rewritten always.\r\n',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: ''
          }
        ],
        created_on: '2018-05-14T11:29:40Z',
        updated_on: '2018-05-14T11:29:40Z'
      },
      {
        id: 28734,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 9,
          name: 'Confirmed'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 351063,
          name: 'Volker Kleinschmidt'
        },
        category: {
          id: 26,
          name: 'Text formatting'
        },
        fixed_version: {
          id: 33,
          name: 'Candidate for next minor release'
        },
        subject: 'Edit This Section broken by formatted code',
        description: 'When including code formatting (``` cs) in markdown, the Edit This Section links on the page get messed up similar to defects 14188, 11133, and 11789. The link above the formatted section will open for editing a section of the page that is too large, skipping intermediate headings that should have started a new section. And the subsequent "Edit This Section" links will open wrong (later) sections of the page for editing, with the final ones giving a 404 error because the respective section just isn\'t being found.\r\n\r\n<pre>\r\n# Test page\r\nThis page demonstrates how the code formatter breaks the Edit This Section links\r\n\r\n# Section 1\r\nThis main section is editable correctly.\r\n\r\n## SubSection 1\r\nThis subsection is editable correctly.\r\n\r\n## SubSection 2\r\nThis section contains formatted code. Editing it opens too much content for editing.\r\nIf one removes the second passage of formatted code in the following subsection, editing this one includes even more code, even the next higher-level section!\r\n\r\n``` cs\r\npublic bool test\r\n{\r\n  get\r\n  {\r\n     return false;\r\n  }\r\n}\r\n```\r\n\r\n## SubSection 3\r\nThis section cannot be edited properly - instead the next section is opened for editing.\r\n\r\n\r\n``` cs\r\npublic bool test\r\n{\r\n  get\r\n  {\r\n     return false;\r\n  }\r\n}\r\n```\r\n\r\n## SubSection 4\r\nThis subsection also cannot be edited.\r\n\r\n# Section 2\r\nTrying to edit this section will produce a 404 error.\r\n\r\n</pre>',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: ''
          }
        ],
        created_on: '2018-05-10T21:04:48Z',
        updated_on: '2018-05-19T01:43:13Z'
      },
      {
        id: 28724,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 153583,
          name: 'Martin von Wittich'
        },
        category: {
          id: 7,
          name: 'Accounts / authentication'
        },
        subject: 'Reset the API key when changing/resetting user passwords?',
        description: 'At the moment, Redmine won\'t reset the API key when a user changes his own password, or when an administrator resets the user\'s password. As far as I can tell, administrators don\'t even have the ability to reset API keys of users; only the users themselves can reset their API keys.\r\n\r\nDoesn\'t this pose a security problem for sites where API access has been enabled? Assume for example that a user account has been hacked, and either the user or the administrator changes the user\'s password. Now the user/administrator might assume that the situation has been resolved, but in fact the user still has to manually reset his API key, because the attacker might have saved it. If the user doesn\'t do this (for example because he doesn\'t know about the API key at all), he now left his account open to API abuse by the attacker.\r\n\r\nMaybe the password dialog should display a note about this, or offer a check box that resets the API key?',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-05-09T14:38:55Z',
        updated_on: '2018-05-09T14:38:55Z'
      },
      {
        id: 28708,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 62034,
          name: 'Goran Hasse'
        },
        category: {
          id: 11,
          name: 'Projects'
        },
        subject: 'Project display should have text belonging to project in same column',
        description: '\r\nThe text belonging to a project should go in the\r\nsame column as the project.\r\n\r\np=. !{width:460%}screen-278.png!\r\n\r\n',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: '139'
          }
        ],
        created_on: '2018-05-08T11:31:56Z',
        updated_on: '2018-05-27T06:22:58Z'
      },
      {
        id: 28705,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 350749,
          name: 'Jens Stein'
        },
        category: {
          id: 17,
          name: 'Permissions and roles'
        },
        subject: '403/Not allowed on issue view for non member users',
        description: 'I translate "Non member users" as a group of users which are authenticated but not otherwise authorised to access a project.\r\nSo everybody who is able to log-in but is not a member of the project should be in that group.\r\n\r\nWe added the group "Nicht-Mitglieder" (which is the translated version of "Non member users") in a role called "TicketViewer" to some of our projects and authenticated (so not anonymous) users are not able to view the issues in the project.\r\n\r\nThe TicketViewer role is a very basic role simply allowing to view tickets and see the watchlist (maybe it is needed to enable self-adding to the watchlist).\r\n\r\nWe use Redmine 3.3.4.stable.16947.\r\n\r\nUnfortunately nobody except explicitly added users is able to view the issues.\r\nWe don\'t want to add everybody in the house to the several projects (that would mean to add 1000+ employees plus several partners in/of the company) and everybody would receive notifications and updates of the wiki, news, forums etc. and would be able to view all entities of these information types (because there is no option to administer the permissions to access the several moduls and/or restrict access to news, forums etc.).\r\n\r\nI add screenshots of the added role in an example project and the roles configuration.\r\nMaybe i made a error on setting it up.\r\nIs there any other way to ensure a group (and it should be a dynamically changing group of authenticated users - e.g. employees which don\'t belong to the project as reporters, developers or any other set of roles/functions within the project), let\'s call them authenticated non-members,\r\n\r\n    authenticated non-members are able to view tickets\r\n    authenticated non-members are not able to view any other module\r\n    authenticated non-members are enabled to add themselves to the watchlist\r\n    authenticated non-members won\'t receive any news or forum notifications\r\n\r\nAny advice, tipps, workarounds?\r\nI added a comment on the problem to the closest existing ticket #23655.\r\n\r\nThanks in advance,\r\n\r\nJT',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: '129'
          }
        ],
        created_on: '2018-05-08T09:00:49Z',
        updated_on: '2018-05-08T09:02:53Z'
      },
      {
        id: 28678,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 574,
          name: 'Maxim Krušina'
        },
        category: {
          id: 11,
          name: 'Projects'
        },
        subject: 'Alow to filter projects where the specific role is used',
        description: 'Why? There is a lot of cases, when we need this - like I would like to delete an old role, but I cannot, coz there is a message that this role is in use, but no way to detect by which project.',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-05-03T04:01:44Z',
        updated_on: '2018-05-05T07:24:29Z'
      },
      {
        id: 28672,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 350196,
          name: 'Andrius Merkys'
        },
        category: {
          id: 3,
          name: 'SCM'
        },
        subject: 'Browsing of single file projects using SVN does not work',
        description: 'Dear maintainers,\r\n\r\nI have attempted to create a single file project. I have added a SVN repository URL pointing to a single file (let\'s say, svn://www.crystallography.net/cod-tools/trunk/CHANGELOG). Everything works fine except \'History | View | Annotate | Download\' tabs in projects/cod-tools-changelog/repository/changes/CHANGELOG. Error log says:\r\n\r\nApp 12828 stderr: svn: E160013: File not found: revision 6179, path \'/trunk/CHANGELOG/CHANGELOG\'\r\nApp 12828 stderr: svn: E145000: Unknown node kind for \'svn://www.crystallography.net/cod-tools/trunk/CHANGELOG/CHANGELOG\'\r\n\r\nIt seems as repository\'s URLs are required to point to directories only. However, having project per file would be beneficial, and it is what I need now. Can this defect be evaded?\r\n\r\nI am using redmine 3.0 and subversion 1.8 as supplied by APT package manager of Debian-8.10.\r\n\r\nMany thanks,\r\nAndrius',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: '80'
          }
        ],
        created_on: '2018-05-02T11:12:38Z',
        updated_on: '2018-05-02T11:12:38Z'
      },
      {
        id: 28669,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 40856,
          name: 'Jens Krämer'
        },
        category: {
          id: 56,
          name: 'Issues filter'
        },
        subject: 'Project filter is (sometimes) ignored in CSV export',
        description: 'Suppose you have a project P which has subprojects P1. Further you have a global, saved issue query with a @project_id@ filter for just the subproject P1.\r\n\r\nWhen calling that query in the context of P (by going to /projects/p/issues?query_id=123), only issues of P1 are shown. The same is true for the PDF export when accessed from this page. However, the CSV export when accessed from the same page, will contain issues from P as well.\r\n\r\nThe cause of that discrepancy is, that the modal CSV export options window serializes the query into a bunch of hidden fields, while the PDF export just uses the @query_id@ URL parameter, like the web UI view does.\r\n\r\nDeeper down, the problem is the timing of when @@query.project@ is set in @QueriesHelper#retrieve_query@: With @query_id@ present, the query is loaded and then the project is set. Without @query_id@ (in the CSV export case), the project is set first, before the params are applied. This results in a different available_filters configuration, because only in absence of the project, the @project_id@ filter will be added. So with the project being set early, the project_id filter isn\'t initialized in the query object and thus all issues of P are rendered in the CSV. I\'m attaching a failing test case illustrating the problem.\r\n\r\nI tried two approaches to solve the problem but both weren\'t really straightforward and I\'m not sure which one to pursue further.\r\n\r\n1. Use @query_id@ in the hidden fields of the modal instead of serializing all the filters. I changed the @query_as_hidden_field_tags@ helper for this, basing it\'s output on @Query#as_params@. That worked somewhat but at least the \'all columns\' option would need special treatment in this case because it was ignored.\r\n2. Change QueriesHelper#retrieve_query to not initialize the new query with the project when creating it, but apply the params first and set the project later. While this solved my case, it broke a lot of other test cases in both issues and timelog_reports controller tests.\r\n3. There might be a better way to fix this in @IssueQuery@ itself, by differentiating the cases of \'should I show the project filter in the UI\' (only if called outside project context) from \'should I apply an already set project filter\' (yes, if the projects filtered for are sub-projects of the present project).\r\n\r\nOpinions, anybody?\r\n\r\nThe problem is present at least since 3.3, I worked on current trunk (r17320).',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: '139'
          }
        ],
        created_on: '2018-05-01T03:34:09Z',
        updated_on: '2018-05-01T03:34:09Z'
      },
      {
        id: 28662,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 3,
          name: 'Patch'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 107353,
          name: 'Marius BALTEANU'
        },
        category: {
          id: 10,
          name: 'UI'
        },
        fixed_version: {
          id: 127,
          name: '4.1.0'
        },
        subject: 'Replace "Cancel" buttons from the modals with "Cancel" link',
        description: 'In the current UI, the main action for a form is represented by a button element (eg: Create, Create and continue, Add, etc) and the "Cancel" action is represented by a link. This is a very useful because the main action should be more evident for an user.\r\n\r\nIn the modals (Export to CSV, Add watchers, Add members), both actions (main and cancel) are represented by a button and this is confusing. The attached patch replaces all the cancel buttons from the modals with the same "Cancel" link used in the rest of the app.    ',
        done_ratio: 0,
        created_on: '2018-04-30T09:05:56Z',
        updated_on: '2018-05-13T00:09:23Z'
      },
      {
        id: 28638,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 349718,
          name: 'Davide Giacometti'
        },
        category: {
          id: 9,
          name: 'Email notifications'
        },
        subject: 'Filter by issue statuses on reminder task',
        description: 'I need an issue statuses filter on reminder task in order to send the notification only for specific issue statuses.\r\n\r\nThe attached patches provide the option statuses that accept a comma separated list of issue_statuses ids (defaults to all issue_statuses).\r\nusage example:\r\n\r\n<pre>\r\nbundle exec rake redmine:send_reminders statuses=\'1,2\' RAILS_ENV=\'development\' \r\n</pre>\r\n\r\nI ask for a review of the patches and their implementation in Redmine code.',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-04-26T10:05:44Z',
        updated_on: '2018-04-26T12:21:59Z'
      },
      {
        id: 28636,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 305112,
          name: 'Rene Sperling'
        },
        category: {
          id: 58,
          name: 'Issues list'
        },
        subject: 'Cannot find an issue from a closed subproject',
        description: 'Hi,\r\n\r\nI have a main project with several closed subprojets. I want to find an issue from one of these closed projects.\r\nUsing the search function with \'project with subprojects\' Redmine does not list it.\r\nWhen using \'all projects\' or reopening the concerning project Redmine shows the issue.\r\n\r\nIf this is not a bug, it would be nice to have an option to switch that behavior off.',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: '139'
          }
        ],
        created_on: '2018-04-26T07:18:58Z',
        updated_on: '2018-04-26T07:18:58Z'
      },
      {
        id: 28624,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 3,
          name: 'Resolved'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 286016,
          name: '膺升 陳'
        },
        subject: 'How to hide "Non member" and "Anonymous" from admin/groups page.',
        description: 'Hi all,\r\n\r\nI know that "Non member" and "Anonymous" are two system roles for internal used by redmine,so that cannot be deleted.But if we would like to hide the two items from admin/groups page,can we do that? ',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: ''
          }
        ],
        created_on: '2018-04-25T08:29:21Z',
        updated_on: '2018-04-28T11:18:39Z'
      },
      {
        id: 28618,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 3,
          name: 'Patch'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 348426,
          name: 'Elena Krasnopolskaya'
        },
        category: {
          id: 36,
          name: 'Calendar'
        },
        fixed_version: {
          id: 33,
          name: 'Candidate for next minor release'
        },
        subject: 'Datepicker is called incorrectly',
        description: 'When calling Datepicker an array of objects was passed incorrectly: at the time of the call @$(input).datepickerFallback("option", "defaultDate", default_date);@ [application.js:689] in array is passed 3 arguments, but in [application.js:216-217] one argument is passed to the function. Function is declared @$.fn.datepickerFallback = function( options )@ [application.js:836] with one argument. Therefore when calling the "real" Datepicker only one argument is passed instead of three.\r\n\r\nThe attached patch fixes this.\r\n',
        done_ratio: 0,
        created_on: '2018-04-24T12:12:46Z',
        updated_on: '2018-07-01T04:31:46Z'
      },
      {
        id: 28609,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 5,
          name: 'High'
        },
        author: {
          id: 348578,
          name: 'mauricio kagel'
        },
        category: {
          id: 20,
          name: 'Plugin API'
        },
        subject: 'Error 404 on configure plugin',
        description: 'Redmine 3.4.5 installed (suse linux leap 42.3)\r\n\r\nthe following plugin are have been downloaded from the redmine plugin repo and installed\r\n\r\n* event notification  plugin\r\n* plantuml\r\n* worktime plugin\r\n\r\nthey appear in the plugin list, whenever i try to configure them\r\nhyperlink "configure" a err404 occors telling an attachment is missing,\r\ngerman translaton "anhang existiert nicht oder ist gelöscht worden" \r\n',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: '139'
          }
        ],
        created_on: '2018-04-23T12:08:21Z',
        updated_on: '2018-04-23T12:08:21Z'
      },
      {
        id: 28603,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 160151,
          name: 'Randa Bustami'
        },
        category: {
          id: 2,
          name: 'Issues'
        },
        subject: 'edit issue subject as bulk',
        description: 'why we cannot edit or update group of issue subject as bulk ',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-04-22T13:28:53Z',
        updated_on: '2018-04-22T13:28:53Z'
      },
      {
        id: 28595,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 345315,
          name: 'sergio .'
        },
        category: {
          id: 10,
          name: 'UI'
        },
        subject: 'Please remove font definition from the body element.',
        description: 'public/stylesheets/application.css\r\n\r\nbody { font-family: Verdana, sans-serif; font-size: 12px; color:#333; margin: 0; padding: 0; min-width: 900px; }\r\n\r\nIt\'s really bad idea to redefine default user font size and family. You can define any font (menu, footer, anywhere), but the main one should be user defined.\r\n\r\n',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: ''
          }
        ],
        created_on: '2018-04-21T07:21:32Z',
        updated_on: '2018-04-21T07:21:32Z'
      },
      {
        id: 28594,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 2,
          name: 'Feature'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 345315,
          name: 'sergio .'
        },
        assigned_to: {
          id: 1,
          name: 'Jean-Philippe Lang'
        },
        category: {
          id: 25,
          name: 'Website (redmine.org)'
        },
        subject: 'Please remove letter-spacing as it looks ugly.',
        description: '',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          }
        ],
        created_on: '2018-04-21T07:08:54Z',
        updated_on: '2018-04-23T00:13:25Z'
      },
      {
        id: 28576,
        project: {
          id: 1,
          name: 'Redmine'
        },
        tracker: {
          id: 1,
          name: 'Defect'
        },
        status: {
          id: 1,
          name: 'New'
        },
        priority: {
          id: 4,
          name: 'Normal'
        },
        author: {
          id: 44824,
          name: 'Doruk Fişek'
        },
        subject: 'Redmine rejects e-mail but adds the attachment',
        description: 'Setting: There\'s an issue that a required field\'s empty.\r\n\r\nWhen I try to update the issue via e-mail (but not add value to the required field), Redmine rejects the e-mail update (as it should).\r\n\r\nHowever if the e-mail has an attachment, it adds the attachment to the issue nevertheless.\r\n\r\nWhat it should do is to reject the attachment also.',
        done_ratio: 0,
        custom_fields: [
          {
            id: 2,
            name: 'Resolution',
            value: ''
          },
          {
            id: 4,
            name: 'Affected version',
            value: ''
          }
        ],
        created_on: '2018-04-17T13:32:39Z',
        updated_on: '2018-04-23T16:32:14Z'
      }
    ],
    total_count: 4781,
    offset: 0,
    limit: 100
  };