function receivesAFunction(callback)
{
    return callback();
}
function returnsANamedFunction()
{
    const thing = apple => `i like ${apple}`;
    return thing;
}
function returnsAnAnonymousFunction(apple)
{
    return () => `i like ${apple}`;
}