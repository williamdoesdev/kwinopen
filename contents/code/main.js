print("hello world");

function hello() {
    print("hello world");
    workspace.clientAdded.connect(window => window.minimized = true);
}

registerShortcut("Hello", "Print hello world.", "Meta+R", () => hello());