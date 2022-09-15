export class HashManagerMock {
    public hash = async (plaintext: string): Promise<string> => {
        switch(plaintext) {
            case "bananinha":
                return "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC"
            default:
                return "hash-mock"
        }
    }

    public compare = async (plaintext: string, hash: string): Promise<boolean>  => {
        switch(plaintext) {
            case "bananinha":
                return hash === "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC"
            default:
                return false
        }
    }
}