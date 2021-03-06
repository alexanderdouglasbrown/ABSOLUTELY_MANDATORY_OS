var grep = function (counter) {
    switch (counter) {
        case 0:
            var args = this.args;
            this.program_counter++;
            var grepWork = CLI.getSTDIn();
            if (grepWork == "") {
                OS.display("STDIn is empty. Try piping.");
                this.state = "Stop";
                this.program_counter = 0;
                break;
            }
            grepWork = grepWork.split('\n');

            for (i = 0; i < grepWork.length; i++) {
                for (j = 0; j < args.length; j++) {
                    if (grepWork[i].includes(args[j]))
                        OS.display(grepWork[i]);
                }
            }
            this.program_counter++;
        default:
            this.state = "Stop";
            this.program_counter = 0;
    }
}
Processes.listOfProcesses.push(new Process("grep", grep));
HelpInfo.listOfHelp.push(new Manual("grep", "[previous_command] | grep [arg_1], ... ,[arg_n]", "Piping command: Searches the output of the previous command for the given search term(s), and outputs the line that term was contained in."));