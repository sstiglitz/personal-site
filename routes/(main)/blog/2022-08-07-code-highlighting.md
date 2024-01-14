---
title: Code Highlighting
date: 2022-08-07
type: blog
draft: true
meta:
    title: code highlighting | netsplit
    description: Trying out the code highlighting features of markdown.
---

Lets try the code highlighter a bit.

```go {linenos=table,hl_lines=[8,"15-17"],linenostart=199}
// GetTitleFunc returns a func that can be used to transform a string to
// title case.
//
// The supported styles are
//
// - "Go" (strings.Title)
// - "AP" (see https://www.apstylebook.com/)
// - "Chicago" (see https://www.chicagomanualofstyle.org/home.html)
//
// If an unknown or empty style is provided, AP style is what you get.
func GetTitleFunc(style string) func(s string) string {
  switch strings.ToLower(style) {
  case "go":
    return strings.Title
  case "chicago":
    return transform.NewTitleConverter(transform.ChicagoStyle)
  default:
    return transform.NewTitleConverter(transform.APStyle)
  }
}
```

Maybe some python too:

```python
class InitializeTempDirectoryOperator(BaseOperator):
    template_fields = ("temp_dir",)

    def __init__(self, temp_dir, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.temp_dir = temp_dir

    def execute(self, context):
        temp_dir = f"{context['dag'].default_args['root_temp_dir']}/{self.temp_dir}"

        BashOperator(
            task_id="none",
            bash_command=f"""
            set -e;
            umask 0;

            echo "Cleaning up any existing files."
            echo "List of files to remove, if any."
            ls -R {temp_dir}/* || true
            echo "Removing..."
            rm -rf {temp_dir}/*
            echo "Done."
            echo "Creating directory {temp_dir}"
            mkdir -p {temp_dir};
        """,
        ).execute({})
```
