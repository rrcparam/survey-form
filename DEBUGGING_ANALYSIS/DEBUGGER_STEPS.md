## Debugging procedures and observations

# Breakpoint 1: Check on Start Date

Before Stepping Through
The program is still for now on line 27.isNotEmpty('startDate') is being processed now.Unfortunately, start date is not filled in.After Stepping Through
The outcome of the isNotEmpty method is negative.
an error message is displayed as part of showError() execution.
As a result of isValid being false the form will not sent.

# Breakpoint 2: Check on Checkboxes

Before Stepping Through

Line 47 is now the point of execution suspension.
The call to hasCheckedOption('hobbies') is made.
All given checkboxes are unchecked.
After Stepping Through
The outcome of hasCheckedOption is negative.
An error message is displayed as part of showError() execution.
As a result isValid is changed to false.

# Breakpoint 3: Debugging validateForm()

Before Stepping Through
Execution is suspended at the beginning of validateForm().
isValid is set to true at the start of the function.
After Stepping Through
With every validation run isValid is set for update procedures.
In the case of die validation is failed, isValid will take value which is false.
In the situation when is all fields are valid, Then, the form will be submitted.

